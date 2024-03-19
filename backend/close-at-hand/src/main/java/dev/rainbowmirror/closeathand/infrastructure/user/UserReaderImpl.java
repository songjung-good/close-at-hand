package dev.rainbowmirror.closeathand.infrastructure.user;

import dev.rainbowmirror.closeathand.common.exception.EntityNotFoundException;
import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserReaderImpl implements UserReader {
    private final UserRepository userRepository;

    @Override
    public User getUser(String userToken) {
        return userRepository.findByUserToken(userToken)
                .orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public Optional<User> getByAccount(String account) {
        return userRepository.findByAccount(account);
    }
}
