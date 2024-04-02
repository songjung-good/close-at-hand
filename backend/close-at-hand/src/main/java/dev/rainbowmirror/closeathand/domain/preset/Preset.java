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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "preset_detail",
            joinColumns = @JoinColumn(name = "preset_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "clothes_id", nullable = false))
    private Set<Clothes> clothes = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Preset(String presetImgUrl, String presetName, Set<Clothes> clothes,User user) {
        if (user == null) throw new RuntimeException("empty user");
        this.user = user;

        if (!StringUtils.hasLength(presetName)) this.presetName = "이름없는 프리셋";
        else this.presetName = presetName;

        if (clothes != null) this.clothes = clothes;

        if (!StringUtils.hasLength(presetImgUrl)) this.presetImgUrl = "https://rainmirror.s3.ap-northeast-2.amazonaws.com/preset/noImg.png";
        else this.presetImgUrl = presetImgUrl;
    }

    public void addClothes(Clothes clothes) {
        for (Clothes clothing : this.clothes){
            if (clothing.getClothesId().equals(clothes.getClothesId())) {return;}
        }
        this.clothes.add(clothes);
    }

    public void changeImgUrl(String presetImgUrl) {this.presetImgUrl = presetImgUrl;}
    public void changeName(String presetName) {this.presetName = presetName;}

    public void addClothes(Set<Clothes> clothes){
        this.clothes.addAll(clothes);
    }
    public void popClothes(Set<Clothes> clothes) {
        this.clothes.removeAll(clothes);
    }

    public String getFilename(){
        return "preset/" + presetId;
    }
}
