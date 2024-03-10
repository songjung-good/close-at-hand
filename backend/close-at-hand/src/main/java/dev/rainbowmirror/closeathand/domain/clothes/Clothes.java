package dev.rainbowmirror.closeathand.domain.clothes;

import com.google.common.collect.Lists;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "clothes")
public class Clothes extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clothesId;
    private String clothesImgUrl;
    private String detection;
    private ZonedDateTime lastWashDate;
    private Integer price;

    @Enumerated
    private Status status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "clothes")
    private Set<Preset> presets = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "clothes", cascade = CascadeType.PERSIST)
    private List<ClothesTagGroup> clothesTagGroupList = Lists.newArrayList();

    @Getter
    @RequiredArgsConstructor
    public enum Status {
        ENABLE("옷장"), DISABLE("세탁 바구니");


        private final String description;
    }

    public void enable(){ this.status = Status.ENABLE; }
    public void disable(){ this.status = Status.DISABLE; }


}
