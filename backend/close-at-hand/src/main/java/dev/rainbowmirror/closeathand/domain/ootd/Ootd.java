package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@ToString
@Table(name = "ootd")
public class Ootd extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ootdId;

    @Column(nullable = false)
    @Setter
    private String ootdImgUrl;

    @ManyToMany
    @JoinTable(name = "ootd_detail",
            joinColumns = @JoinColumn(name = "ootd_id"),
            inverseJoinColumns = @JoinColumn(name = "clothes_id"))
    private Set<Clothes> clothes = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_token", updatable = false)
    private User user;

    @Builder
    public Ootd(String ootdImgUrl, Set<Clothes> clothes, User user) {
        if (user == null) throw new RuntimeException("check User");
        else {
            this.user = user;
        }
        if (!StringUtils.hasLength(ootdImgUrl)) this.ootdImgUrl = "https://rainmirror.s3.ap-northeast-2.amazonaws.com/ootd/noImg.png";
        else this.ootdImgUrl = ootdImgUrl;
        if (clothes != null) this.clothes = clothes;
    }

    public void updateImg(String ootdImgUrl){
        this.ootdImgUrl = ootdImgUrl;
    }

    public void updateClothes(Set<Clothes> clothes){
        this.clothes = clothes;
    }

    public void addClothes(Clothes clothes) {
        for (Clothes clothing : this.clothes){
            if (clothing.getClothesId().equals(clothes.getClothesId())) {return;}
        }
        this.clothes.add(clothes);
    }

    public void popClothes(Clothes clothes) {
        for (Clothes clothing : this.clothes){
            if (clothing.getClothesId().equals(clothes.getClothesId())){
                this.clothes.remove(clothing);
                return;
            }
        }
    }
}
