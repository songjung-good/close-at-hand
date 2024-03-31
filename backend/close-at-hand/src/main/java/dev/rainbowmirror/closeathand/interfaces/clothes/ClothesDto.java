package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.time.ZonedDateTime;

public class ClothesDto {
    @Getter
    @Setter
    @ToString
    public static class CreateRequest { // 등록요청왔을때
        @NotEmpty(message = "check clothesImg")
        private MultipartFile clothesImg;

        private String clothesImgUrl;

        @NotEmpty(message = "check userToken")
        private String userToken;

        private String detection;
        private ZonedDateTime lastWashDate;
        private Integer price;

        public ClothesCommand.CreateCommand toCommand() {
            return ClothesCommand.CreateCommand.builder()
                    .clothesImage(clothesImg)
                    .clothesImgUrl(clothesImgUrl)
                    .userToken(userToken)
                    .detection(detection)
                    .lastWashDate(lastWashDate)
                    .price(price)
                    .build();
        }
    }

    @Getter
    @Setter
    @ToString
    public static class CreateResponse { // 등록요청반환
        private final Long clothesId;
        private final String clothesImgUrl;

        public CreateResponse(ClothesInfo clothesInfo) {
            this.clothesId = clothesInfo.getClothesId();
            this.clothesImgUrl = clothesInfo.getClothesImgUrl();
            // 추가로 보내고 싶은 정보 작성하기
        }
    }

    // 조회요청 반환
    @Getter
    @Setter
    @ToString
    public static class FindResponse {
        private final Long clothesId;
        private final String clothesImgUrl;
        private final ZonedDateTime lastWashDate;

        public FindResponse(ClothesInfo clothesInfo) {
            this.clothesId = clothesInfo.getClothesId();
            this.clothesImgUrl = clothesInfo.getClothesImgUrl();
            this.lastWashDate = clothesInfo.getLastWashDate();
        }

    }
}
