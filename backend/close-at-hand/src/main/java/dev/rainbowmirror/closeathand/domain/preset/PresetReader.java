package dev.rainbowmirror.closeathand.domain.preset;

import java.util.List;

public interface PresetReader {
    Preset getPreset(Long presetId);
    List<Preset> getPresets(String userToken);
}
