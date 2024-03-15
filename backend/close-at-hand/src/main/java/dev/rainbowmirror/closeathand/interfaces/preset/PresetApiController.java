package dev.rainbowmirror.closeathand.interfaces.preset;

import dev.rainbowmirror.closeathand.application.preset.PresetFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@Tag(name = "Preset", description = "프리셋 관련 api")
@RequestMapping("/preset")
public class PresetApiController {
    private final PresetFacade presetFacade;

    @Operation(summary = "새로운 preset 생성",
        description = "새로운 preset을 생성합니다. " +
                "presetName과 presetImgUrl은 default값이 있습니다.")
    @PostMapping
    public CommonResponse insertPreset(@RequestBody PresetDto.InsertRequestDto request){
        var command = request.toCommand();
        PresetInfo presetInfo = presetFacade.insertPreset(command);
        var response = new PresetDto.InsertResponseDto(presetInfo);
        return CommonResponse.success(response);
    }
}
