package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.domain.user.UserCommand;
import dev.rainbowmirror.closeathand.domain.user.UserInfo;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

public class UserDto {

    @Getter
    @Setter
    @ToString
    public static class SignupRequest {
        @NotEmpty(message = "check userName")
        private String userName;

        @NotEmpty(message = "check userName")
        private String account;

        @NotEmpty(message = "check userName")
        private String password;

        public UserCommand toCommand(){
            return UserCommand.builder()
                    .userName(userName)
                    .account(account)
                    .password(password)
                    .build();
        }
    }

    @Getter
    @ToString
    public static class SignupResponse {
        private final String userToken;
        private final String userName;
        private final String height;
        private final String gender;

        public SignupResponse(UserInfo userInfo) {
            this.userToken = userInfo.getUserToken();
            this.userName = userInfo.getUserName();
            this.height = userInfo.getHeight();
            this.gender = userInfo.getGender();
        }
    }

}
