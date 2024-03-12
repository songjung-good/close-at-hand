package dev.rainbowmirror.closeathand.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class UserCommand {
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
