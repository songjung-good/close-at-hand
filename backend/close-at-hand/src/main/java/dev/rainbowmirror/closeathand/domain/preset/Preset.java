package dev.rainbowmirror.closeathand.domain.preset;


import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "preset")
public class Preset extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long presetId;

    private String presetImgUrl;
    private String presetName;

    @ManyToMany
    @JoinTable(name = "preset_detail",
            joinColumns = @JoinColumn(name = "preset_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "clothes_id", nullable = false))
    private Set<Clothes> clothes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Preset(String presetImgUrl, String presetName, User user) {
        if (user == null) throw new RuntimeException("empty user");
        this.user = user;

        if (!StringUtils.hasLength(presetName)) this.presetName = "이름없는 프리셋";
        else this.presetName = presetName;

        if (!StringUtils.hasLength(presetImgUrl)) this.presetImgUrl = "noImage.jpg";
        else this.presetImgUrl = presetImgUrl;
    }

    public void changeImg(String presetImgUrl) {this.presetImgUrl = presetImgUrl;}
    public void changeName(String presetName) {this.presetName = presetName;}

    public void addClothes(Set<Clothes> clothes){
        this.clothes.addAll(clothes);
    }

}
