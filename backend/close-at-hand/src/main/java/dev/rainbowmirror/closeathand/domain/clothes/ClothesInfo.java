package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTagInfo;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Getter;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

// 외부(api)로 보내기위한 clothes의 정보
// inner class라는게 있다.
@Getter
public class ClothesInfo {
    private final Long clothesId;
    private final String clothesImgUrl;
    private final ZonedDateTime lastWashDate;
    private final List<String> texture = new ArrayList<>();
    private final List<String> category = new ArrayList<>();
    private final List<String> item = new ArrayList<>();
    private final List<String> colors = new ArrayList<>();
    private final List<String> looks = new ArrayList<>();
    private final List<String> prints = new ArrayList<>();
//    private final Integer price;
    private final List<ClothesTagGroupInfo> clothesTagGroupList = new ArrayList<>();
//    private final User user;

    public ClothesInfo(Clothes clothes) {
        this.clothesId = clothes.getClothesId();
        this.clothesImgUrl = clothes.getClothesImgUrl();
        this.lastWashDate = clothes.getLastWashDate();
//        this.price = clothes.getPrice();
        for (ClothesTagGroup clothesTagGroup: clothes.getClothesTagGroupList()){
            switch(clothesTagGroup.getClothesTagGroupName()){
                case "textures":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.texture.add(ct.getTagName());
                    }
                    break;
                case "category":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.category.add(ct.getTagName());
                    }
                    break;
                case "item":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.item.add(ct.getTagName());
                    }
                    break;
                case "colors":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.colors.add(ct.getTagName());
                    }
                    break;
                case "looks":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.looks.add(ct.getTagName());
                    }
                    break;
                case "prints":
                    for (ClothesTag ct :clothesTagGroup.getClothesTagList()){
                        this.prints.add(ct.getTagName());
                    }
                    break;
                default: break;
            }
        }
    }
}
