package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

public class PresetCommand {
    @Getter
    @Builder
    @ToString
    public static class InsertCommand{
        private final MultipartFile presetImg;
        private final String presetName;
        private final String userToken;
        private final Long[] clothesIdList;
        @Setter
        private User user;
        @Setter
        private Set<Clothes> clothes;
    }

    @Getter
    @Builder
    @ToString
    public static class UpdateCommand {
        private Long presetId;
        private String presetName;
        private MultipartFile presetImg;
    }
}
