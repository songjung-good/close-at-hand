package dev.rainbowmirror.closeathand.domain.preset;

import java.util.List;

public interface PresetService {
    PresetInfo insertPreset(PresetCommand.InsertCommand command);
    List<PresetInfo> getPresetByUserToken(String userToken);
    PresetInfo getPreset(Long presetId);
    PresetInfo updatePreset(PresetCommand.UpdateCommand command);
    PresetInfo deletePreset(Long presetId);
}
