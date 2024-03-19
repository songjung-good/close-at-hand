package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Getter;

import java.time.ZonedDateTime;

// 외부(api)로 보내기위한 clothes의 정보
// inner class라는게 있다.
@Getter
public class ClothesInfo {
    private final Long clothesId;
    private final String clothesImgUrl;
    private final String detection;
    private final ZonedDateTime lastWashDate;
    private final Integer price;
//    private final User user;

    public ClothesInfo(Clothes clothes) {
        this.clothesId = clothes.getClothesId();
        this.clothesImgUrl = clothes.getClothesImgUrl();
        this.detection = clothes.getDetection();
        this.lastWashDate = clothes.getLastWashDate();
        this.price = clothes.getPrice();
    }


}
