package dev.rainbowmirror.closeathand.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

public class UserCommand {
    @Getter
    @Builder
    @ToString
    public static class CreateCommand {
        private final String userName;
        private final String account;
        private final String password;
        public User toEntity(){
            return User.builder()
                    .userName(userName)
                    .account(account)
                    .password(password)
                    .build();
        }
    }

    @Getter
    @Builder
    @ToString
    public static class UpdateCommand{
        private final String userToken;
        private final String userName;
        private final Float height;
        private final String gender;
        private final String account;
        private final String password;

        public User toEntity() {
            return User.builder()
                    .userToken(userToken)
                    .userName(userName)
                    .height(height)
                    .gender(gender)
                    .account(account)
                    .password(password)
                    .build();
        }
    }
    @Getter
    @Builder
    @ToString
    public static class LoginCommand{
        private final String account;
        private final String password;

        public User toEntity(){
            return User.builder()
                    .account(account)
                    .password(password)
                    .build();
        }
    }

}


