package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

public class OotdCommand {
    @Getter
    @Builder
    @ToString
    public static class InsertCommand{
        private final String ootdImgUrl;
        private final String ootdName;
        private final String userToken;
        @Setter
        private User user;
        public Preset toEntity(){
            return Preset.builder()
                    .presetImgUrl(ootdImgUrl)
                    .presetName(ootdName)
                    .user(user)
                    .build();
        }
    }

    @Getter
    @Builder
    @ToString
    public static class UpdateCommand{

    }
}
