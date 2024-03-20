package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "ootd_clothes")
public class OotdClothes {

    @Id
    private Long ootdClothesId;

    @ManyToOne
    @JoinColumn(name = "clothes_id")
    private Clothes clothes;

    @ManyToOne
    @JoinColumn(name = "ootd_id")
    private Ootd ootd;

}
