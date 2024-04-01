package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagAllInfo;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.time.ZonedDateTime;
import java.util.List;

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
    @Getter
    @Setter
    @ToString
    public static class ClothesTagResponse {
        private List<String> category;
        private List<String> item;
        private List<String> texture;
        private List<String> colors;
        private List<String> looks;
        private List<String> prints;

        public ClothesTagResponse(List<ClothesTagAllInfo> list) {
            for (ClothesTagAllInfo ctai: list) {
                switch (ctai.getClothesTagGroupName()){
                    case "category" : this.category = ctai.getClothesTagList(); break;
                    case "item" : this.item = ctai.getClothesTagList(); break;
                    case "texture" : this.texture = ctai.getClothesTagList(); break;
                    case "colors" : this.colors = ctai.getClothesTagList(); break;
                    case "looks" : this.looks = ctai.getClothesTagList(); break;
                    case "prints" : this.prints = ctai.getClothesTagList(); break;
                }
            }
        }
    }

    @Getter
    @Setter
    @ToString
    public static class UpdateRequest{
        private Long clothesId;
        private ZonedDateTime lastWashDate;
        private Boolean laundry;

        public ClothesCommand.UpdateCommand toCommand(){
            return ClothesCommand.UpdateCommand.builder()
                    .clothesId(clothesId)
                    .lastWashDate(lastWashDate)
                    .laundry(laundry)
                    .build();
        }
    }
}
