package dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup;

import com.google.common.collect.Lists;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Slf4j
@Getter
@Entity
@ToString
@NoArgsConstructor
@Table(name = "clothes_tag_group")
public class ClothesTagGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "clothes_id")
    private Clothes clothes;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "clothesTagGroup", cascade = CascadeType.PERSIST)
    private List<ClothesTag> clothesTagList = Lists.newArrayList();

    private String clothesTagGroupName;

    // 빌더 만들기
    @Builder
    public ClothesTagGroup(String clothesTagGroupName, List<ClothesTag> clothesTagList, Clothes clothes) {
        this.clothesTagGroupName = clothesTagGroupName;
//        this.clothesTagList = clothesTagList;
        this.clothes = clothes;
    }

    public void maketag(JsonArray jsonArray, String tagGroupName) {
        for (int i = 0; i < jsonArray.size(); i++) {
            JsonObject tagGroupObject = (JsonObject) jsonArray.get(i);
            JsonElement tagArray = tagGroupObject.get("name");
            String tagName = tagArray.toString().replaceAll("\"","");

            // 태그 만들기
            ClothesTag clothesTag = ClothesTag.builder()
                    .tagName(tagName)
                    .clothesTagGroup(this)
                    .build();
            // list에 추가
            clothesTagList.add(clothesTag);
        }
    }

}
