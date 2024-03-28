package dev.rainbowmirror.closeathand.domain.ootd;

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
@Table(name = "ootd_detail")
public class OotdDetail extends AbstractEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ootd_detail_id;

    @ManyToOne
    private Ootd ootd;

    @ManyToOne
    private Clothes clothes;
}
