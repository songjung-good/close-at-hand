package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@Getter
@Entity
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
}
