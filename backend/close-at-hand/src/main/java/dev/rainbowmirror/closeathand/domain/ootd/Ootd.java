package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.preset.PresetCommand;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
@Table(name = "ootd")
public class Ootd extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ootdId;

    @Column(nullable = false)
    private String ootdImgUrl;

    @OneToMany(mappedBy = "ootd",fetch = FetchType.LAZY)
    private List<OotdClothes> ootd_clothes = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userToken", insertable = false, updatable = false)
    private User user;

    @Column(nullable = false)
    private String userToken;

    @Builder
    public Ootd(String ootdImgUrl, String userToken) {
        if (!StringUtils.hasLength(userToken)) throw new RuntimeException("empty userToken");
        else this.userToken = userToken;
        if (!StringUtils.hasLength(ootdImgUrl)) this.ootdImgUrl = "noImage.jpg";
        else this.ootdImgUrl = ootdImgUrl;
    }

    public void updateImg(String ootdImgUrl){
        this.ootdImgUrl = ootdImgUrl;
    }

}
