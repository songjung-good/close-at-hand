package dev.rainbowmirror.closeathand.domain.user;

public interface UserReader {
    User getUser(String userToken);
}
