package dev.rainbowmirror.closeathand.interfaces.preset;

import dev.rainbowmirror.closeathand.application.preset.PresetFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/preset")
public class PresetApiController {
    private final PresetFacade presetFacade;

    @PostMapping
    public CommonResponse insertPreset(@RequestBody PresetDto.InsertRequestDto request){
        var command = request.toCommand();
        PresetInfo presetInfo = presetFacade.insertPreset(command);
        var response = new PresetDto.InsertResponseDto(presetInfo);
        return CommonResponse.success(response);
    }
}
