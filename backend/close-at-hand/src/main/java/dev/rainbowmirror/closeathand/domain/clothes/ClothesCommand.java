package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.common.util.TokenGenrator;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.time.ZonedDateTime;

// 데이터 전처리: dto를 command로 만들어서 facade로 가도록

public class ClothesCommand {
    @Getter
    @Builder
    @ToString
    public static class CreateCommand {
        private String clothesToken;  // facade에서 사용하기 때문에
        private final String clothesImgUrl;
        private final MultipartFile clothesImage;
        private final String userToken;
        private final String detection;
        private final ZonedDateTime lastWashDate;
        private final Integer price;
        // 이건 필요없을듯
//        private final Clothes.Status status;
//        private final Clothes.Location location;
        public void newToken(){
            this.clothesToken = TokenGenrator.randomChracterWithPrefix("clo_");
        }
        public String getFilename(){
            return "clothes/" + clothesToken;
        }

        public Clothes toEntity(User user) { // 이건 user 데려가서 연결하기 위해
            return Clothes.builder()
                    .clothesImgUrl(clothesImgUrl)
                    .userToken(userToken)
                    .detection(detection)
                    .lastWashDate(lastWashDate)
                    .price(price)
                    .user(user)
                    .clothesToken(clothesToken)
//                    .location(location)
//                    .status(status)
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
