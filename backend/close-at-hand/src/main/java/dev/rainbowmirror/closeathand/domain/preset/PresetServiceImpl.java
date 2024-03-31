package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
        return null;
    }

    @Override
    public PresetInfo getPreset(Long presetId) {
        return null;
    }

    @Override
    public PresetInfo updatePreset(PresetCommand.UpdateCommand command) {
        return null;
    }

    @Override
    public PresetInfo deletePreset(Long presetId) {
        return null;
    }
}
