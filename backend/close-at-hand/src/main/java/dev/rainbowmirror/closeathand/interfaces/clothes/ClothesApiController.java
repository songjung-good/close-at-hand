package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.application.clothes.ClothesFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/clothes")
public class ClothesApiController {
    private final ClothesFacade clothesFacade;

    @PostMapping // post 요청이 올 경우
    public CommonResponse createClothes(@RequestBody ClothesDto.CreateRequest request) {
        var command = request.toCommand();
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
