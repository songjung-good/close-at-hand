package dev.rainbowmirror.closeathand.infrastructure.preset;

import dev.rainbowmirror.closeathand.domain.preset.Preset;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PresetRepository extends JpaRepository<Preset, Long> {
    List<Preset> findByUserUserToken(String UserToken);
}
