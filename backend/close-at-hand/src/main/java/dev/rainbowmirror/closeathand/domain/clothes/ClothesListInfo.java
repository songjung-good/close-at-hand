package dev.rainbowmirror.closeathand.domain.clothes;

import lombok.Getter;

@Getter
public class ClothesListInfo {
    private final Long clothesId;
    private final String clothesImgUrl;

    public ClothesListInfo(Clothes clothes) {
        this.clothesId = clothes.getClothesId();
        this.clothesImgUrl = clothes.getClothesImgUrl();
    }
}
