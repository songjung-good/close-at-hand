package dev.rainbowmirror.closeathand.interfaces.ootd;

import dev.rainbowmirror.closeathand.domain.ootd.OotdCommand;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class OotdDto {
    @Getter
    @Setter
    @ToString
    public static class CreateRequest{
        private String userToken;
        @NotEmpty
        private List<Long> clothesIdList;
        public OotdCommand.CreateCommand toCommand(MultipartFile ootdImg){
            return OotdCommand.CreateCommand.builder()
                    .userToken(userToken)
                    .ootdImg(ootdImg)
                    .clothesIdList(clothesIdList)
                    .build();
        }
    }
}
