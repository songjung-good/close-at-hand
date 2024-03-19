package dev.rainbowmirror.closeathand.domain.user;

import java.util.Optional;

public interface UserReader {
    User getUser(String userToken);
    Optional<User> getByAccount(String Account);
}
