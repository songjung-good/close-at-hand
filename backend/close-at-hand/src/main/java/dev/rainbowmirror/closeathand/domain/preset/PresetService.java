package dev.rainbowmirror.closeathand.domain.preset;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PresetService {
    PresetInfo insertPreset(PresetCommand.InsertCommand command);
    List<PresetInfo> getPresetByUserToken(String userToken);
    PresetInfo getPreset(Long presetId);
    void deletePreset(Long presetId);
    PresetInfo addClothes(Long presetId, Long[] clothesIdList);
    PresetInfo popClothes(Long presetId, Long[] clothesIdList);
    PresetInfo update(Long presetId, String presetName, MultipartFile presetImg);
}
