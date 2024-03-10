package dev.rainbowmirror.closeathand.domain.preset;


import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "preset")
public class Preset extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long preset_id;

    private String presetImgUrl;
    private String presetName;

    @ManyToMany
    @JoinTable(name = "preset_detail",
            joinColumns = @JoinColumn(name = "preset_id"),
            inverseJoinColumns = @JoinColumn(name = "clothes_id"))
    private Set<Clothes> clothes = new HashSet<>();


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
