package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.RecommendService;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesRecommendInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/recommend")
@Tag(name = "Recommend")
public class RecommendApiController {
    private final RecommendService recommendService;
    @Operation(summary = "추천 옷 받기")
    @GetMapping("/recommend")
    public CommonResponse<ClothesRecommendInfo> getRecommend() {
        ClothesRecommendInfo clothesRecommendInfo = recommendService.getRecommendation();
        return CommonResponse.success(clothesRecommendInfo);
    }
}
