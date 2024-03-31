package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.infrastructure.user.UserRepository;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

public class OotdCommand {
    @Getter
    @Builder
    @ToString
    @RequiredArgsConstructor
    public static class CreateCommand{
        private final String ootdImgUrl;
        private final String userToken;
        private final MultipartFile ootdImg;
        private final List<Long> clothesIdList;

        public Ootd toEntity(User user, Set<Clothes> clothes){
            return Ootd.builder()
                    .ootdImgUrl(ootdImgUrl)
                    .clothes(clothes)
                    .user(user)
                    .build();
        }

        public String getFilename(Long ootdId){
            return "ootd/"+ootdId.toString();
        }
    }

    @Getter
    @Builder
    @ToString
    public static class SearchCommand{
        private final String userToken;

        public Ootd toEntity(){
            return Ootd.builder()
                    .build();
        }
    }
}
