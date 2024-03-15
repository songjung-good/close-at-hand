package dev.rainbowmirror.closeathand.domain.clothes;


import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.ZonedDateTime;

// 데이터 전처리: dto를 command로 만들어서 facade로 가도록

public class ClothesCommand {
    @Getter
    @Builder
    @ToString
    public static class CreateCommand {
        private final String clothesImgUrl;
        private final String userToken;
        private final String detection;
        private final ZonedDateTime lastWashDate;
        private final Integer price;

        @Setter // fk로 user를 가지고 있으니 일단 넣어둠
        private final User user;

        public Clothes toEntity() {
            return Clothes.builder()
                    .clothesImgUrl(clothesImgUrl)
                    .userToken(userToken)
                    .detection(detection)
                    .lastWashDate(lastWashDate)
                    .price(price)
                    .build();
        }
    }
}
