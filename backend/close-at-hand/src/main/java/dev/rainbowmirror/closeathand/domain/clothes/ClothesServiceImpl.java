package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagAllInfo;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import dev.rainbowmirror.closeathand.infrastructure.clothes.ClothesRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;




// 이 파일은 service의 내용을 실제 구현하는거
@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesServiceImpl implements ClothesService{
    private final ClothesStore clothesStore;
    private final UserReader userReader;
    private final ClothesReader clothesReader;
    private final ClothesRepository clothesRepository;
    private final ClothesUpdateTool clothesUpdateTool;

    @Override
    public ClothesInfo createClothes(ClothesCommand.CreateCommand command) {
        // 유저 토큰으로 user를 찾아서 넣어줘야함 -> update를 만들자X
        var user = userReader.getUser(command.getUserToken());
        Clothes initClothes = command.toEntity(user);
        Clothes clothes = clothesStore.store(initClothes);
        return new ClothesInfo(clothes);
    }

    @Override
    @Transactional
    public ClothesInfo findClothes(Long clothesId) { // command로 안받고 그냥 id받아서 넘기기
        Clothes clothes = clothesUpdateTool.update(clothesReader.findClothes(clothesId));
        return new ClothesInfo(clothes);
    }

    @Override
    public ClothesInfo findClothesByClothesToken(String clothesToken) { // clothesToken으로 옷 검색
        Clothes clothesOrigin = clothesReader.findClothesByClothesToken(clothesToken);
        if ( clothesOrigin == null ) return null; // db에 없을 경우 null 반환
        Clothes clothes = clothesUpdateTool.update(clothesOrigin);
        return new ClothesInfo(clothes);
    }

    @Override
    public List<ClothesInfo> findAllClothes(String userToken) {
        List<Clothes> clothesList = clothesReader.findAllClothes(userToken);
        List<ClothesInfo> result = new ArrayList<>();
        for (Clothes clothes: clothesList){result.add(new ClothesInfo(clothes));}
        return result;
    }

    public List<ClothesTagAllInfo> findAllClothesTag(String userToken){
        Set<String> set = new HashSet<>();
        List<List<String>> clothesTags = new ArrayList<>();
        for (int i=0; i<6; i++) clothesTags.add(new ArrayList<>());
        for (ClothesTag cLothesTag: clothesRepository.findDistinctTagByUserToken(userToken)){
            if (cLothesTag == null) continue;
            if (set.contains(cLothesTag.getTagName())) continue;
            switch (cLothesTag.getClothesTagGroup().getClothesTagGroupName()){
                case "category" : clothesTags.get(0).add(cLothesTag.getTagName()); break;
                case "item" : clothesTags.get(1).add(cLothesTag.getTagName()); break;
                case "textures" : clothesTags.get(2).add(cLothesTag.getTagName()); break;
                case "colors" : clothesTags.get(3).add(cLothesTag.getTagName()); break;
                case "looks" : clothesTags.get(4).add(cLothesTag.getTagName()); break;
                case "prints" : clothesTags.get(5).add(cLothesTag.getTagName()); break;
            }
            set.add(cLothesTag.getTagName());
        }
        List<ClothesTagAllInfo> result = new ArrayList<>();
        result.add(new ClothesTagAllInfo("category",clothesTags.get(0)));
        result.add(new ClothesTagAllInfo("item",clothesTags.get(1)));
        result.add(new ClothesTagAllInfo("texture",clothesTags.get(2)));
        result.add(new ClothesTagAllInfo("colors",clothesTags.get(3)));
        result.add(new ClothesTagAllInfo("looks",clothesTags.get(4)));
        result.add(new ClothesTagAllInfo("prints",clothesTags.get(5)));
        return result;
    }

    @Override
    public List<Clothes> findEnabledClothes() {
        return clothesRepository.findEnabledClothes(Clothes.Location.ENABLE);
    }


    @Override
    public List<ClothesInfo> updateClothes(ClothesCommand.UpdateCommand command) {
        List<ClothesInfo> result = new ArrayList<>();
        for (Long clothesId : command.getClothesIdList()) {
            Clothes clothes = clothesReader.findClothes(clothesId);
            if (command.getLaundry()) {
                clothes.disable();
            } else {
                clothes.enable();
            }
            clothesStore.store(clothes);
        }
        return result;
    }
}