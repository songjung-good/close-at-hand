package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.common.util.JsonTagPaser;
import dev.rainbowmirror.closeathand.domain.OmniCommerceService;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import dev.rainbowmirror.closeathand.infrastructure.clothes.ClothesRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import kong.unirest.HttpResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


// 이 파일은 service의 내용을 실제 구현하는거
@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesServiceImpl implements ClothesService{
    private final ClothesStore clothesStore;
    private final UserReader userReader;
    private final ClothesReader clothesReader;
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
    public List<ClothesListInfo> findAllClothes(String userToken) {
        List<Clothes> clothesList = clothesReader.findAllClothes(userToken);
        List<ClothesListInfo> result = new ArrayList<>();
        for (Clothes clothes: clothesList){ result.add(new ClothesListInfo(clothes)); }
        return result;
    }

    public List<String> findAllClothesTag(String userToken){
        List<String> list = new ArrayList<>();
        for (ClothesTag cLothesTag: clothesReader.findDistinctTagByUserToken(userToken)){
            list.add(cLothesTag.getTagName());
        }
        return list;
    }

    @Override
    public ClothesInfo updateClothes(ClothesCommand.UpdateCommand command) {

        return null;
    }
}