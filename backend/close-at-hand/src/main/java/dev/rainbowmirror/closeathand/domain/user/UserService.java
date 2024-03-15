package dev.rainbowmirror.closeathand.domain.user;

public interface UserService {
    // Command , Criteria --- Info
    UserInfo insertUser(UserCommands.UserCommand command);
    UserInfo getUserInfo(String userToken);
    UserInfo updateUser(UserCommands.UpdateCommand command);
    UserInfo enableUser(String userToken);
    UserInfo disableUser(String userToken);
    UserInfo checkDuplicate(String account);
}
