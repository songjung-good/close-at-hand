package dev.rainbowmirror.closeathand.interfaces.ootd;

import dev.rainbowmirror.closeathand.domain.ootd.OotdCommand;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

public class OotdDto {
    @Getter
    @Setter
    @ToString
    public static class CreateRequest{
        private String userToken;
        private List<Long> clothesIdList;
        public OotdCommand.CreateCommand toCommand(){
            return OotdCommand.CreateCommand.builder()
                    .userToken(userToken)
                    .clothesIdList(clothesIdList)
                    .build();
        }
    }
}
