package dev.rainbowmirror.closeathand.domain.user;

import lombok.Getter;

@Getter
public class UserInfo {
    private final Long user_id;
    private final String userToken;
    private final String name;
    private final String height;
    private final String gender;
    private final User.Status status;

    public UserInfo(User user) {
        this.user_id = user.getUser_id();
        this.userToken = user.getUserToken();
        this.name = user.getName();
        this.height = user.getHeight();
        this.gender = user.getGender();
        this.status = user.getStatus();
    }
}
