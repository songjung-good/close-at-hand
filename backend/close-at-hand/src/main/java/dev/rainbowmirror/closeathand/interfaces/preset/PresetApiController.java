package dev.rainbowmirror.closeathand.interfaces.preset;

import dev.rainbowmirror.closeathand.application.preset.PresetFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/preset")
@Tag(name = "Preset")
public class PresetApiController {
    private final PresetFacade presetFacade;

    @Operation(summary = "새로운 preset 생성",
        description = "새로운 preset을 생성합니다. " +
                "presetName과 presetImgUrl은 default값이 있습니다.")
    @PostMapping(produces = "application/json", consumes = "multipart/form-data")
    public CommonResponse<PresetDto.InsertResponseDto> insertPreset(@RequestPart PresetDto.InsertRequestDto request, @RequestPart(value = "presetImg", required = false) MultipartFile presetImg) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();

        var command = request.toCommand(userToken, presetImg);
        PresetInfo presetInfo = presetFacade.insertPreset(command);
        var response = new PresetDto.InsertResponseDto(presetInfo);
        return CommonResponse.success(response);
    }

    @Operation(summary = "preset 상세 조회")
    @GetMapping({"/{presetId}"})
    public CommonResponse<PresetInfo> getPreset(@PathVariable Long presetId){
        PresetInfo presetInfo = presetFacade.getPreset(presetId);
        return CommonResponse.success(presetInfo);
    }

    @Operation(summary = "preset 전체 조회")
    @GetMapping
    public CommonResponse<List<PresetInfo>> getPresets(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();

        String userToken = auth.getAuthority();
        List<PresetInfo> list = presetFacade.getPresets(userToken);
        return CommonResponse.success(list);
    }

    @Operation(summary = "preset에 clothes 추가")
    @PutMapping("/add")
    public CommonResponse<PresetInfo> addClothes(@RequestBody PresetDto.ClothesAddPop request){
        PresetInfo presetInfo = presetFacade.addClothes(request);
        return CommonResponse.success(presetInfo);
    }

    @Operation(summary = "preset의 clothes 제거")
    @PutMapping("/pop")
    public CommonResponse<PresetInfo> popClothes(@RequestBody PresetDto.ClothesAddPop request){
        PresetInfo presetInfo = presetFacade.popClothes(request);
        return CommonResponse.success(presetInfo);
    }

    @Operation(summary = "preset name, image update")
    @PutMapping(produces = "application/json", consumes = "multipart/form-data")
    public CommonResponse<PresetInfo> rename(@RequestPart PresetDto.UpdateRequest request, @RequestPart(value = "presetImg", required = false) MultipartFile presetImg){
        return CommonResponse.success(presetFacade.update(request.toCommand(presetImg)));
    }

    @Operation(summary = "preset remove")
    @DeleteMapping("/{presetId}")
    public CommonResponse<String> remove(@PathVariable("presetId") Long presetId){
        presetFacade.remove(presetId);
        return CommonResponse.success("SUCCESSFUL DELETE");
    }
}
