package dev.rainbowmirror.closeathand.domain.user;


import dev.rainbowmirror.closeathand.domain.AbstractEntity;
import dev.rainbowmirror.closeathand.common.exception.util.TokenGenrator;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@Table(name = "user")
public class User extends AbstractEntity {

    @Id
    @GeneratedValue
    private Long user_id;
    private String userToken;
    private String name;
    private String height;
    private String gender;


    @Enumerated(EnumType.STRING)
    private Status status;

    @Getter
    @RequiredArgsConstructor
    public enum Status {
        ENABLE( "활성화"), DISABLE("비활성화");

        private final String description;
    }

    @Builder
    public User(String name) {
        if (!StringUtils.hasLength(name)) throw new RuntimeException("empty name");

        final String CLIENT_PREFIX = "cli_";
        this.userToken = TokenGenrator.randomChracterWithPrefix(CLIENT_PREFIX);
        this.name = name;
        this.status = Status.ENABLE;
    }

    public void enable() {
        this.status = Status.ENABLE;
    }
    public void disable() {
        this.status = Status.DISABLE;
    }
}
