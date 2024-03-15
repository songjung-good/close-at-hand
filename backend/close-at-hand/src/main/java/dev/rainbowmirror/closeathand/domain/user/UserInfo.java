package dev.rainbowmirror.closeathand.domain.user;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserInfo {
    private final Long userId;
    private final String userToken;
    private final String userName;
    private final Float height;
    private final String gender;
    private final User.Status status;

    public UserInfo(User user) {
        this.userId = user.getUserId();
        this.userToken = user.getUserToken();
        this.userName = user.getUserName();
        this.height = user.getHeight();
        this.gender = user.getGender();
        this.status = user.getStatus();
    }
}
