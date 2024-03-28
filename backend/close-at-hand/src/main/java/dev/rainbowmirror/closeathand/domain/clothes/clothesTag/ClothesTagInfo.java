package dev.rainbowmirror.closeathand.domain.clothes.clothesTag;

import lombok.Getter;

@Getter
public class ClothesTagInfo {
    private final String clothesTagName;

    public ClothesTagInfo(ClothesTag clothesTag){
        this.clothesTagName = clothesTag.getTagName();
    }
}
