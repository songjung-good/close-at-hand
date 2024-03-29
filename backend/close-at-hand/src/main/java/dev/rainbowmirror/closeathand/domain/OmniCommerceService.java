package dev.rainbowmirror.closeathand.domain;

import dev.rainbowmirror.closeathand.interfaces.clothes.OmniBodyDto;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class OmniCommerceService {

    @Value("${omni.X-Api-Key}")
    private String XApiKey;

    @Value("${omni.url}")
    private String url;

    @Value("${omni.get-key}")
    private String getKey;

    @Value("${omni.get-url}")
    private String getUrl;

    @Value("${omni.recommend-url}")
    private String recommendUrl;

    @Value("${omni.recommend-key}")
    private String recommendkey;


    // id == clothesToken
    public int postClothes(String id, String clothesImgUrl, String userToken){
        OmniBodyDto bodyDto = new OmniBodyDto(id, clothesImgUrl, userToken);

        HttpResponse<String> response = Unirest.post(url)
                .header("Content-Type", "application/json")
                .header("X-Api-Key", XApiKey)
                .body(bodyDto.toJson())
                .asString();
        return response.getStatus();
    }

    // 옴니커머스에 상품 상세 정보 요청하기
    public HttpResponse<String> getClothes(String clothesToken) {

        HttpResponse<String> response = Unirest.get(getUrl)
                .header("Content-Type", "application/json")
                .header("X-Api-Key", getKey)
                .routeParam("productId", clothesToken)
                .asString();
        System.out.println(response.getBody());
//        System.out.println(response.getStatus());
        return response;
    }

    // 옴니커머스에 스타일링 추천 요청하기
    public HttpResponse<String> getRecommendation(String clothesToken) { // clothesToken이 여기서 id가 될거니까
        HttpResponse<String> response = Unirest.get(recommendUrl)
                .header("Content-Type", "application/json")
                .header("X-Api-Key", recommendkey)
                .routeParam("productId", clothesToken)
                .asString();
//        System.out.println(response.getBody());
//        System.out.println(response.getStatus());
        return response;
    }
}
