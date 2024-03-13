package dev.rainbowmirror.closeathand.domain.user;

import dev.rainbowmirror.closeathand.infrastructure.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserStore userStore;
    private final UserReader userReader;
    @Override
    public UserInfo getUserInfo(String userToken) {
        User user = userReader.getUser(userToken);
        return new UserInfo(user);
    }

    @Override
    public UserInfo insertUser(UserCommands.UserCommand command) {
        User initUser = command.toEntity();
        User user = userStore.store(initUser);
        return new UserInfo(user);
    }

    @Override
    public UserInfo updateUser(UserCommands.UpdateCommand command) {
        User beforeUser = userReader.getUser(command.getUserToken());
        beforeUser.update(command);
        User user = userStore.store(beforeUser);
        return new UserInfo(user);
    }

    @Override
    public UserInfo enableUser(String userToken) {
        User beforeUser = userReader.getUser(userToken);
        beforeUser.enable();
        User user = userStore.store(beforeUser);
        return new UserInfo(user);
    }

    @Override
    public UserInfo disableUser(String userToken) {
        User beforeUser = userReader.getUser(userToken);
        beforeUser.disable();
        User user = userStore.store(beforeUser);
        return new UserInfo(user);
    }
}
