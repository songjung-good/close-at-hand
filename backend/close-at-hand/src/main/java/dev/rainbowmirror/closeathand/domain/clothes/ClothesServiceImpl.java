package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.common.util.JsonTagPaser;
import dev.rainbowmirror.closeathand.domain.OmniCommerceService;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import dev.rainbowmirror.closeathand.infrastructure.clothes.ClothesTagGroupRepository;
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
    private final OmniCommerceService omniCommerceService;
    private final ClothesTagGroupRepository clothesTagGroupRepository;
    @Autowired
    private EntityManager em;

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
        Clothes clothes = clothesReader.findClothes(clothesId);
        Clothes.Status status = clothes.getStatus();
        String clothesToken = clothes.getClothesToken();
        if (status == Clothes.Status.BASIC) {
            HttpResponse<String> response = omniCommerceService.getClothes(clothesToken);
            int statusCode = response.getStatus();
            
            if ( 201 == statusCode){ // 정상 응답
                System.out.println("SUCCESS " + statusCode);
                // 옷 업데이트 함수를 넣을건데, 업데이트 함수를 따로 만들어야겠지?
                List<ClothesTagGroup> list = JsonTagPaser.parse(response.getBody(), clothes);

                for (ClothesTagGroup tg : list) {em.persist(tg);}
                em.flush();
                clothes.updateClothes(list);
            }
            else {throw new RuntimeException("옷 정보를 조회과정에서 문제가 발생했습니다.");};
        }
        return new ClothesInfo(clothes);
    }

    public List<String> findAllClothesTag(String userToken){
        List<String> list = clothesTagGroupRepository.findAllByClothesUserUserToken(userToken);
        return list;
    }
}