package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.application.clothes.ClothesFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/clothes")
@Tag(name = "Clothes",
        description = "Clothes 관련 api")
public class ClothesApiController {
    private final ClothesFacade clothesFacade;

    @PostMapping(produces = "application/json", consumes = "multipart/form-data") // post 요청이 올 경우
    public CommonResponse createClothes(@RequestHeader String userToken, @RequestPart(name = "clothesImg") MultipartFile clothesImg) throws IOException {
        var command = ClothesCommand.CreateCommand.builder()
                .clothesImage(clothesImg)
                .userToken(userToken)
                .build();
        ClothesInfo clothesInfo = clothesFacade.createClothes(command);
        var response = new ClothesDto.CreateResponse(clothesInfo);
        return CommonResponse.success(response);
    }

    @GetMapping("/{clothesId}")
    public CommonResponse findClothes(@PathVariable Long clothesId) {
        ClothesInfo clothesInfo = clothesFacade.findClothes(clothesId);
        var response = new ClothesDto.FindResponse(clothesInfo);
        return CommonResponse.success(response);
    }
}
