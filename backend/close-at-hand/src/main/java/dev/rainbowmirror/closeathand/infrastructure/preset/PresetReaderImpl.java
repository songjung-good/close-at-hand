package dev.rainbowmirror.closeathand.infrastructure.preset;

import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.preset.PresetReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class PresetReaderImpl implements PresetReader {
    private final PresetRepository presetRepository;
    @Override
    public Preset getPreset(Long presetId) { return this.presetRepository.getReferenceById(presetId); }
}
