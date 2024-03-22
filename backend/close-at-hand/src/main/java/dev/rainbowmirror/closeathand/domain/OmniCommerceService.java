package dev.rainbowmirror.closeathand.domain;

import dev.rainbowmirror.closeathand.interfaces.clothes.OmniBodyDto;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class OmniCommerceService {

    @Value("${omni.X-Api-Key}")
    private String XApiKey;

    @Value("${omni.url}")
    private String url;


    public int postClothes(String id, String clothesImgUrl, String userToken){
        OmniBodyDto bodyDto = new OmniBodyDto(id, clothesImgUrl, userToken);

        HttpResponse<String> response = Unirest.post(url)
                .header("Content-Type", "application/json")
                .header("X-Api-Key", XApiKey)
                .body(bodyDto.toJson())
                .asString();
        return response.getStatus();
    }

}
