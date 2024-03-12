package dev.rainbowmirror.closeathand.application.user;

import dev.rainbowmirror.closeathand.domain.user.UserCommand;
import dev.rainbowmirror.closeathand.domain.user.UserInfo;
import dev.rainbowmirror.closeathand.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserFacade {
    private final UserService userService;

    public UserInfo signup(UserCommand userCommand){
        UserInfo userInfo = userService.signup(userCommand);
        return userInfo;
    }
}
