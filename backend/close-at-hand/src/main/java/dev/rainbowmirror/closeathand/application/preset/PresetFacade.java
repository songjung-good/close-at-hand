package dev.rainbowmirror.closeathand.application.preset;

import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.preset.PresetInfo;
import dev.rainbowmirror.closeathand.domain.preset.PresetService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class PresetFacade {
    private final PresetService presetService;

    public PresetInfo insertPreset(PresetCommand.InsertCommand command){
        PresetInfo presetInfo = presetService.insertPreset(command);
        return presetInfo;
    }
}
