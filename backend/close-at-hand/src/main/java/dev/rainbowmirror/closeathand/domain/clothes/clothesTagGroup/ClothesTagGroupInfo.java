package dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTagInfo;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class ClothesTagGroupInfo {
    private final String clothesTagGroupName;
    private final List<ClothesTagInfo> clothesTagList = new ArrayList<>();

    public ClothesTagGroupInfo(ClothesTagGroup clothesTagGroup){
        this.clothesTagGroupName = clothesTagGroup.getClothesTagGroupName();
        for (ClothesTag clothesTag : clothesTagGroup.getClothesTagList()){
            this.clothesTagList.add(new ClothesTagInfo(clothesTag));
        }
    }
}
