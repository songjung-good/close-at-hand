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

    public UserInfo signup(UserCommand.CreateCommand createCommand){
        UserInfo userInfo = userService.insertUser(createCommand);
        return userInfo;
    }

    public UserInfo updateUser(UserCommand.UpdateCommand updateCommand) {
        UserInfo userInfo = userService.updateUser(updateCommand);
        return userInfo;
    }

    public UserInfo disableUser(String userToken){
        UserInfo userInfo = userService.disableUser(userToken);
        return userInfo;
    }

    public UserInfo checkDuplicate(String account) {
        UserInfo userInfo = userService.checkDuplicate(account);
        return userInfo;
    }
}
