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
}
