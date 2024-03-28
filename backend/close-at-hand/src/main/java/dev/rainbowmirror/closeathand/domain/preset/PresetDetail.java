package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "preset_detail")
public class PresetDetail extends AbstractEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long preset_detail_id;

    @ManyToOne
    private Preset preset;

    @ManyToOne
    private Clothes clothes;
}
