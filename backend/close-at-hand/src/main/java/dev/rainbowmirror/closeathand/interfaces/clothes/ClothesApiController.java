package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.application.clothes.ClothesFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/clothes")
@Tag(name = "Clothes")
public class ClothesApiController {
    private final ClothesFacade clothesFacade;

    @Operation(summary = "옷 등록 api")
    @PostMapping(produces = "application/json", consumes = "multipart/form-data") // post 요청이 올 경우
    public CommonResponse<ClothesDto.CreateResponse> createClothes(@RequestPart(name = "clothesImg") MultipartFile clothesImg) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();

        var command = ClothesCommand.CreateCommand.builder()
                .clothesImage(clothesImg)
                .userToken(userToken)
                .build();
        ClothesInfo clothesInfo = clothesFacade.createClothes(command);
        var response = new ClothesDto.CreateResponse(clothesInfo);
        return CommonResponse.success(response);
    }

    @Operation(summary = "옷 조회 api")
    @GetMapping("/{clothesId}")
    public CommonResponse<ClothesDto.FindResponse> findClothes(@PathVariable Long clothesId) {
        ClothesInfo clothesInfo = clothesFacade.findClothes(clothesId);
        return CommonResponse.success(clothesInfo);
    }

    @Operation(summary = "옷 태그리스트 조회")
    @GetMapping("/tag")
    public CommonResponse<List<ClothesTagGroupInfo>> findAllClothesTag(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();
        List<ClothesTagGroupInfo> list = clothesFacade.findAllClothesTag(userToken);
        return CommonResponse.success(list);
    }
}
