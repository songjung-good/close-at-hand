package dev.rainbowmirror.closeathand.infrastructure.user;

import dev.rainbowmirror.closeathand.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserToken(String userToken);
    Optional<User> findByAccount(String account);

}
