package dev.rainbowmirror.closeathand.application.preset;

import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import dev.rainbowmirror.closeathand.domain.preset.PresetService;
import dev.rainbowmirror.closeathand.interfaces.preset.PresetDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PresetFacade {
    private final PresetService presetService;

    public PresetInfo insertPreset(PresetCommand.InsertCommand command) {
        PresetInfo presetInfo = presetService.insertPreset(command);
        return presetInfo;
    }

    public PresetInfo getPreset(Long presetId) {
        PresetInfo presetInfo = presetService.getPreset(presetId);
        return presetInfo;
    }

    public List<PresetInfo> getPresets(String userToken) {
        return presetService.getPresetByUserToken(userToken);
    }

    public PresetInfo addClothes(PresetDto.ClothesAddPop request) {
        return presetService.addClothes(request.getPresetId(), request.getClothesIdList());
    }

    public PresetInfo popClothes(PresetDto.ClothesAddPop request) {
        return presetService.popClothes(request.getPresetId(), request.getClothesIdList());
    }
}
