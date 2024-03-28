package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;

import java.util.List;

public interface PresetService {
    PresetInfo insertPreset(PresetCommand.InsertCommand command);
    List<PresetInfo> getPresetByUserToken(String userToken);
    PresetInfo getPreset(Long presetId);
    PresetInfo deletePreset(Long presetId);
    PresetInfo addClothes(Long presetId, Long[] clothesIdList);
    PresetInfo popClothes(Long presetId, Long[] clothesIdList);
}
