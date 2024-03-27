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
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Arrays;
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

    @OneToMany(mappedBy = "clothesTagGroup", cascade = CascadeType.ALL)
    private List<ClothesTag> clothesTagList = Lists.newArrayList();

    private String clothesTagGroupName;


    // clothes_id는 언제 어떻게 연결해줘야할까?
    // 빌더 만들기
    @Builder
    public ClothesTagGroup(String clothesTagGroupName, List<ClothesTag> clothesTagList, Clothes clothes) {
        this.clothesTagGroupName = clothesTagGroupName;
//        this.clothesTagList = clothesTagList;
        this.clothes = clothes;
    }

    // 태그를 다 만드는 함수 구현하자
    // objectArray를 주면 그 안의 name을 뽑아서 걔네의 리스트를 반환하는 함수를 만들어두면 좋을듯?
    // array 이름 == 태그그룹
    // 배열을 돌면서 object안의 "name"을 get하고, 그걸 태그로 만들기
    // 얘를 전부 리스트에 넣어서
    // 태그그룹 빌드할때 사용. (옷id, 태그리스트, 이름)
    public void maketag(JsonArray jsonArray, String tagGroupName) {
        System.out.println(tagGroupName);
        for (int i = 0; i < jsonArray.size(); i++) {
            JsonObject tagGroupObject = (JsonObject) jsonArray.get(i);
            JsonElement tagArray = tagGroupObject.get("name");
            String tagName = tagArray.toString();

            // 태그 만들기
            ClothesTag clothesTag = ClothesTag.builder()
                    .tagName(tagName)
                    .build();
            // list에 추가
            clothesTagList.add(clothesTag);
//            System.out.println(clothesTag.getTagName());
        }
//        System.out.println(Arrays.toString());
//        clothesTagList.forEach(System.out::println);
        // 저장을 해야할것같은디.ㅜ
    }

}
