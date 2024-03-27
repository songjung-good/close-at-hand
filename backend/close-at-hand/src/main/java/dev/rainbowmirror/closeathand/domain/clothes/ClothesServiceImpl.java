package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.OmniCommerceService;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import kong.unirest.HttpResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


// 이 파일은 service의 내용을 실제 구현하는거
@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesServiceImpl implements ClothesService{
    private final ClothesStore clothesStore;
    private final UserReader userReader;
    private final ClothesReader clothesReader;
    private final OmniCommerceService omniCommerceService;

    @Override
    public ClothesInfo createClothes(ClothesCommand.CreateCommand command) {
        // 유저 토큰으로 user를 찾아서 넣어줘야함 -> update를 만들자X
        var user = userReader.getUser(command.getUserToken());
        Clothes initClothes = command.toEntity(user);
        Clothes clothes = clothesStore.store(initClothes);
        return new ClothesInfo(clothes);
    }

    @Override
    public ClothesInfo findClothes(Long clothesId) { // command로 안받고 그냥 id받아서 넘기기
        // 일단은 이 함수를 건드려서 동작하게 만들고, 나중에 facade로 넘기는거 생각해본다.
        Clothes clothes = clothesReader.findClothes(clothesId);
        Clothes.Status status = clothes.getStatus();
        String clothesToken = clothes.getClothesToken();
        /*
        if (status == AIDone){
            그냥 return 으로 옷정보 주기 (ClothesInfo)
        } else{
            옴니커머스Service에서 조회하는 API 보내고
            if 응답 == 정상적으로 오면 {
                옷 업데이트 해주고 리턴
            } 아니면 { 에러 발생 }
        }
        */
        if (status == Clothes.Status.BASIC) {
            HttpResponse<String> response = omniCommerceService.getClothes(clothesToken);
            int statusCode = response.getStatus();
            
            if ( 201 == statusCode){ // 정상 응답
                System.out.println("SUCCESS " + statusCode);
                // 옷 업데이트 함수를 넣을건데, 업데이트 함수를 따로 만들어야겠지?
                clothes.updateClothes(response.getBody());
            }
            else System.out.println("ERROR " + statusCode);
        }
        clothesStore.store(clothes);
        return new ClothesInfo(clothes);

    }
}