package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PresetServiceImpl implements PresetService{
    private final PresetReader presetReader;
    private final PresetStore presetStore;
    private final UserReader userReader;
    @Override
    public PresetInfo insertPreset(PresetCommand.InsertCommand command) {
        var user = userReader.getUser(command.getUserToken());
        command.setUser(user);
        var initPreset = command.toEntity();
        var preset = presetStore.store(initPreset);
        PresetInfo presetInfo = new PresetInfo(preset);
        return presetInfo;
    }

    @Override
    public List<PresetInfo> getPresetByUserToken(String userToken) {
        List<Preset> list = presetReader.getPresets(userToken);
        List<PresetInfo> presetInfos = new ArrayList<>();
        for (Preset preset: list) {presetInfos.add(new PresetInfo(preset));}
        return presetInfos;
    }

    @Override
    public PresetInfo getPreset(Long presetId) {
        Preset preset = presetReader.getPreset(presetId);
        return new PresetInfo(preset);
    }

    @Override
    public PresetInfo deletePreset(Long presetId) {
        return null;
    }
}
