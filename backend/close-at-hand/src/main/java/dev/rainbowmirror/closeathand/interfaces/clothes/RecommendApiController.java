package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.RecommendService;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesRecommendInfo;
import dev.rainbowmirror.closeathand.domain.ootd.OotdService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Iterator;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping
@Tag(name = "Recommend")
public class RecommendApiController {
    private final RecommendService recommendService;
    private final OotdService ootdService;
    @Operation(summary = "추천 옷 받기")
    @GetMapping("/recommend")
    public CommonResponse<ClothesRecommendInfo> getRecommend() {
        ClothesRecommendInfo clothesRecommendInfo = recommendService.getRecommendation();
        return CommonResponse.success(clothesRecommendInfo);
    }

    @Operation(summary = "통계 자료 조회")
    @GetMapping("/statistics")
    public CommonResponse<RecommendDto> getStatistics(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();

        RecommendDto recommendDto = RecommendDto.builder()
                .top5UsedClothes(ootdService.getMostUsedClothes(userToken))
                .build();
        return CommonResponse.success("");
    }
}
