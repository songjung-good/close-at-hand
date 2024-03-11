package dev.rainbowmirror.closeathand.infrastructure.user;

import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserStore;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserStoreImpl implements UserStore {
    private final UserRepository userRepository;
    @Override
    public User store(User user) {
        return userRepository.save(user);
    }
}
