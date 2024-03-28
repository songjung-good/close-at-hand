package dev.rainbowmirror.closeathand.domain.clothes.clothesTag;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "clothes_tag")
public class ClothesTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "clothes_tag_group_id")
    private ClothesTagGroup clothesTagGroup;
    private String tagName;

    // 이것도 이렇게 하는건가? 태그 만들기
    @Builder
    public ClothesTag(String tagName, ClothesTagGroup clothesTagGroup) {
        this.tagName = tagName;
        this.clothesTagGroup = clothesTagGroup;
    }
}
