package dev.rainbowmirror.closeathand.domain.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserStore userStore;
    private final UserReader userReader;
    @Override
    public UserInfo registerUser(UserCommand command) {
        User initUser = command.toEntity();
        User user = userStore.store(initUser);
        return new UserInfo(user);
    }

    @Override
    public UserInfo getUserInfo(String userToken) {
        User user = userReader.getUser(userToken);
        return new UserInfo(user);
    }

    @Override
    public UserInfo enableUser(String userToken) {
        return null;
    }

    @Override
    public UserInfo disableUser(String userToken) {
        return null;
    }
}
