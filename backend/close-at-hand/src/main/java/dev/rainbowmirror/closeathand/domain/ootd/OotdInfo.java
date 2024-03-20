package dev.rainbowmirror.closeathand.domain.ootd;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class OotdInfo {
    private Long ootdId;
    private String ootdImgUrl;

    @Builder
    public OotdInfo(Ootd ootd){
        this.ootdId = ootd.getOotdId();
        this.ootdImgUrl = ootd.getOotdImgUrl();
    }
}
