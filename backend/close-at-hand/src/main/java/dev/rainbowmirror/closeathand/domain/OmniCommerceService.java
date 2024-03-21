package dev.rainbowmirror.closeathand.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import dev.rainbowmirror.closeathand.interfaces.clothes.OmniBodyDto;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Component
public class OmniCommerceService {

//    @Value("${}")
    private String XApiKey="test-2XPioSKYZtt4MzHXH3QGoB938xTCbqxqChHT9Z8L";
    private String url = "https://api.kr.omnicommerce.ai/2022-08/management/products";


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
