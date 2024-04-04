package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import lombok.*;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@ToString
@AllArgsConstructor
public class OotdInfo {
    private final Long ootdId;
    private final String ootdImgUrl;

    @Builder
    public OotdInfo(Ootd ootd){
        this.ootdId = ootd.getOotdId();
        this.ootdImgUrl = ootd.getOotdImgUrl();
    }

    @Getter
    @ToString
    @AllArgsConstructor
    public static class Detail{
        private final Long ootdId;
        @Setter
        private String ootdImgUrl;
        private final Set<ClothesInfo> clothes = new HashSet<>();
        private final ZonedDateTime createdAt;

        @Builder
        public Detail(Ootd ootd){
            this.ootdId = ootd.getOotdId();
            this.ootdImgUrl = ootd.getOotdImgUrl();
            for (Clothes clothes:ootd.getClothes()){
                this.clothes.add(new ClothesInfo(clothes));
            }
            this.createdAt = ootd.getCreatedAt();
        }
    }
}
