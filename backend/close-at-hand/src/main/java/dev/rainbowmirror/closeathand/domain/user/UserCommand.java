package dev.rainbowmirror.closeathand.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class UserCommand {
    private final String name;

    public User toEntity(){
        return User.builder()
                .name(name)
                .build();
    }
}
