package dev.rainbowmirror.closeathand.infrastructure.preset;

import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.preset.PresetStore;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class PresetStoreImpl implements PresetStore {
    private final PresetRepository presetRepository;

    @Override
    public Preset store(Preset preset) { return this.presetRepository.save(preset); }
}
