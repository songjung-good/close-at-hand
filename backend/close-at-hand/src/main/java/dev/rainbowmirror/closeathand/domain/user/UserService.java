package dev.rainbowmirror.closeathand.domain.user;

public interface UserService {
    // Command , Criteria --- Info
    UserInfo registerUser(UserCommand command);
    UserInfo getUserInfo(String userToken);
    UserInfo enableUser(String userToken);
    UserInfo disableUser(String userToken);
}
