package dev.rainbowmirror.closeathand.domain.clothes;


import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.time.ZonedDateTime;

// 데이터 전처리: dto를 command로 만들어서 facade로 가도록

public class ClothesCommand {
    @Getter
    @Builder
    @ToString
    public static class CreateCommand {
        private final String clothesImgUrl;
        private final MultipartFile clothesImage;
        private final String userToken;
        private final String detection;
        private final ZonedDateTime lastWashDate;
        private final Integer price;

        public Clothes toEntity() {
            return Clothes.builder()
                    .clothesImgUrl(clothesImgUrl)
                    .userToken(userToken)
                    .detection(detection)
                    .lastWashDate(lastWashDate)
                    .price(price)
                    .build();
        }

        public Clothes toEntity(User user) {
            return Clothes.builder()
                    .clothesImgUrl(clothesImgUrl)
                    .userToken(userToken)
                    .detection(detection)
                    .lastWashDate(lastWashDate)
                    .price(price)
                    .user(user)
                    .build();
        }
    }

    @Getter
    @Builder
    @ToString
    public static class UpdateCommand {
        private final String clothesImgUrl;
        private final String userToken;
        private final String detection;
        private final ZonedDateTime lastWashDate;
        private final Integer price;
    }

}
