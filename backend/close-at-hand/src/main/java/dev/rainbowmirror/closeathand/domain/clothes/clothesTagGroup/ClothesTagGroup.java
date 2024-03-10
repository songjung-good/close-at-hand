package dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup;

import com.google.common.collect.Lists;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;


@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "clothes_tag_group")
public class ClothesTagGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "clothes_id")
    private Clothes clothes;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "clothesTagGroup", cascade = CascadeType.PERSIST)
    private List<ClothesTag> clothesTagList = Lists.newArrayList();

    private String clothesTagGroupName;

}
