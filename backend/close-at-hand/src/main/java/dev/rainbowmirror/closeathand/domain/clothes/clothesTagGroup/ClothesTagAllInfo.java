package dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup;

import lombok.Getter;

import java.util.List;

@Getter
public class ClothesTagAllInfo {
    private final String clothesTagGroupName;
    private final List<String> clothesTagList;

    public ClothesTagAllInfo(String clothesTagGroupName,List<String> clothesTagList) {
        this.clothesTagGroupName = clothesTagGroupName;
        this.clothesTagList = clothesTagList;
    }
}
