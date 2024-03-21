package dev.rainbowmirror.closeathand.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import dev.rainbowmirror.closeathand.interfaces.clothes.OmniBodyDto;
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


    public String postClothes(String id, String clothesImgUrl, String userToken) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();

        // Header set
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.add("X-Api-Key", XApiKey);
        // Body set
        OmniBodyDto bodyDto = new OmniBodyDto(id, clothesImgUrl, userToken);
        // Message
        HttpEntity<?> requestMessage = new HttpEntity<>(bodyDto.toJson(), httpHeaders);

        // Request
        HttpEntity<String> response = restTemplate.postForEntity(url, requestMessage, String.class);

        // Response 파싱
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);

        return response.toString();
    }

}
