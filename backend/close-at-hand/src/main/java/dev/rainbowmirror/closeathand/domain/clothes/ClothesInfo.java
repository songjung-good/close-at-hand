package dev.rainbowmirror.closeathand.domain.clothes;

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
//    private final Integer price;
    private final List<ClothesTagGroupInfo> clothesTagGroupList = new ArrayList<>();
//    private final User user;

    public ClothesInfo(Clothes clothes) {
        this.clothesId = clothes.getClothesId();
        this.clothesImgUrl = clothes.getClothesImgUrl();
        this.lastWashDate = clothes.getLastWashDate();
//        this.price = clothes.getPrice();
        for (ClothesTagGroup clothesTagGroup: clothes.getClothesTagGroupList()){
            this.clothesTagGroupList.add(new ClothesTagGroupInfo(clothesTagGroup));
        }
    }
}
