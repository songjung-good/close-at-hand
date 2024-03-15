package dev.rainbowmirror.closeathand.domain.clothes;

import com.google.common.collect.Lists;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

// entity
@Slf4j
@Getter
@Entity
@NoArgsConstructor
@ToString
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

    @Builder
    public Clothes(String clothesImgUrl, User user, String userToken,
                   String detection,
                   ZonedDateTime lastWashDate,
                   Integer price) {
        // 필수인건 조건문 처리해주고, 아닌건 그냥 넣으면 됨
        // db 유저를 찾으면 넣어줌
        if (user != null) this.user = user;

        // 토큰이 있으면 유저를 찾아줘야해
        if (userToken == null) throw new RuntimeException("no userToken");

        if(clothesImgUrl == null) throw new RuntimeException("no ImgUrl");
        else this.clothesImgUrl = clothesImgUrl;

        this.detection = detection;
        this.lastWashDate = lastWashDate;
        this.price = price;
    }



}
