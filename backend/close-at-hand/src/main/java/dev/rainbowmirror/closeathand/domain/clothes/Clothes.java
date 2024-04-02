package dev.rainbowmirror.closeathand.domain.clothes;

import com.google.common.collect.Lists;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.common.util.TokenGenrator;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import kong.unirest.HttpResponse;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.time.ZonedDateTime;
import java.util.*;

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

    @Column(nullable = false, unique = true)
    private String clothesToken;

    @Enumerated(EnumType.STRING)
    private Clothes.Status status;

    @Enumerated(EnumType.STRING)
    private Clothes.Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "clothes")
    private Set<Preset> presets = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "clothes", cascade = CascadeType.PERSIST)
    private List<ClothesTagGroup> clothesTagGroupList = Lists.newArrayList();

    @Getter
    @RequiredArgsConstructor
    public enum Location {
        ENABLE("옷장"), DISABLE("세탁 바구니");

        private final String description;
    }

    public void enable(){ this.location = Location.ENABLE; this.lastWashDate = ZonedDateTime.now();}
    public void disable(){ this.location = Location.DISABLE; }

    @Getter
    @RequiredArgsConstructor
    public enum Status { // status: api에서 정보를 받아왔는지 여부 표시
        AIDONE( "정보저장완료"), BASIC("정보필요");

        private final String description;
    }

    public void aidone() {
        this.status = Clothes.Status.AIDONE;
    }

    @Builder
    public Clothes(String clothesImgUrl, User user, String userToken,
                   String clothesToken,
                   Status status,
                   Location location,
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


        if (StringUtils.hasLength(clothesToken)){
            this.clothesToken = clothesToken;
        }
        else {
            final String CLOTHES_PREFIX = "clo_";
            this.clothesToken = TokenGenrator.randomChracterWithPrefix(CLOTHES_PREFIX);
        }

        // 최초 등록 시 위치를 옷장으로
        if (location == null) this.location = Location.ENABLE;
        else this.location = location;

        this.detection = detection;
        this.lastWashDate = lastWashDate;
        this.price = price;
        this.status = Status.BASIC;
    }




    // db를 건드릴거니까 여기(엔티티)에 옷 업데이트를 만든다.
    public void updateClothes(List<ClothesTagGroup> list) {
        clothesTagGroupList = list;
        // status 변경
        aidone();
    }
}
