package dev.rainbowmirror.closeathand.domain;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import dev.rainbowmirror.closeathand.domain.clothes.*;
import kong.unirest.HttpResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class RecommendService {
    private final OmniCommerceService omniCommerceService;
    private final ClothesService clothesService;

    // 옷 내가 정해서 보내기
    public ClothesRecommendInfo getRecommendation () {
        List<List<ClothesListInfo>> recommendList = new ArrayList<>(); // 최종 반환할 리스트
        // 전처리 - 옷장에 있는 옷 중 랜덤으로 2개 선정
        // location==ENABLE
        List<Clothes> closet = clothesService.findEnabledClothes();
        // 랜덤 추출
        Collections.shuffle(closet);
        List<Clothes> randomClothes = closet.subList(0, 2);

        for (Clothes clothes: randomClothes) {
            String clothesToken = clothes.getClothesToken();
            // 추천 받은 옷 정보 받아오기
            HttpResponse<String> response = omniCommerceService.getRecommendation(clothesToken);
            int statusCode = response.getStatus();

            if (statusCode == 201) {
                // json parsing
                JsonParser jsonParser = new JsonParser();
                String responseBody = response.getBody();
                JsonObject jsonObject = (JsonObject) jsonParser.parse(responseBody);
                JsonArray resultsArray = (JsonArray) jsonObject.get("results");

                // 추천보낸 상품
                ClothesInfo originClothesInfo = clothesService.findClothesByClothesToken(clothesToken);
                ClothesListInfo OriginclothesListInfo = new ClothesListInfo(originClothesInfo);


                for (int i = 0; i < resultsArray.size(); i++) {
                    JsonObject recommendationObject = (JsonObject) resultsArray.get(i);
                    JsonArray recommendationArray = (JsonArray) recommendationObject.get("recommendation");
                    List<ClothesListInfo> clothesSet = new ArrayList<>(); // 추천세트를 하나 받을 리스트
                    clothesSet.add(OriginclothesListInfo);
//
                    for (int j = 0; j < recommendationArray.size(); j++) {
                        JsonObject clothesObject = (JsonObject) recommendationArray.get(j);
                        JsonElement clothesId = clothesObject.get("id");
                        String clothesIdString = clothesId.toString().replaceAll("\"", "");
                        ClothesInfo clothesInfo = clothesService.findClothesByClothesToken(clothesIdString);
                        if (clothesInfo != null) {
                            ClothesListInfo clothesListInfo = new ClothesListInfo(clothesInfo);
                            clothesSet.add(clothesListInfo);
                        }
                    }
//                System.out.println("clothesSet.toString() = " + clothesSet.toString());
                    recommendList.add(clothesSet);
                }

                // 후처리(세탁기에 있으면 추천 못해줌)
                // 그리고 그 정보(옷의 token, 이미지)를 보내주기
            } else { throw new RuntimeException("옷 추천 과정에서 문제가 발생했습니다."); }

        }
        // 리스트에 담긴 아이 보내주기
        return new ClothesRecommendInfo(recommendList);
    }

}
