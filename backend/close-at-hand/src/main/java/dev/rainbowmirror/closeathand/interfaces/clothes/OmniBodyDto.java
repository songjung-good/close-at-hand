package dev.rainbowmirror.closeathand.interfaces.clothes;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OmniBodyDto {
    private String id;
    private String url;
    private String detection;
    private String salesUrl;

    @Builder
    public OmniBodyDto(String id, String url, String userToken){
        this.id = id;
        this.url = url;
        this.detection = "AUTO_DETECT";
        this.salesUrl = userToken;
    }

    public String toJson(){
        String sb = "\"products\":[{" + "\"id\":\"" + id + "\", " +
                "\"url\":\"" + url + "\", " +
                "\"detection:\"" + detection + "\", " +
                "\"salesUrl\":" + salesUrl + "\"]}";
        return sb;
    }
}
