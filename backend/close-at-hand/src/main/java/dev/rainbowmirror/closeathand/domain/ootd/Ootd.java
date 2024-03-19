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

import java.util.HashSet;
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

    private String ootdImgUrl;
    private String ootdName;

    @ManyToMany
    @JoinTable(name = "ootd_detail",
            joinColumns = @JoinColumn(name = "ootd_id"),
            inverseJoinColumns = @JoinColumn(name = "clothes_id"))
    private Set<Clothes> clothes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Ootd(String ootdImgUrl, String ootdName, User user) {
        if (user == null) throw new RuntimeException("empty user");

        if (!StringUtils.hasLength(ootdName)) this.ootdName = "이름없는 프리셋";
        else this.ootdName = ootdName;

        if (!StringUtils.hasLength(ootdImgUrl)) this.ootdImgUrl = "noImage.jpg";
        else this.ootdImgUrl = ootdImgUrl;
    }

    // update
    public void update(OotdCommand.UpdateCommand command){

    }
}
