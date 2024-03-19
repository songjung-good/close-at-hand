package dev.rainbowmirror.closeathand.domain.user;


import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.common.exception.util.TokenGenrator;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;

@Slf4j
@Getter
@Entity
@NoArgsConstructor
@ToString
@Table(name = "user")
public class User extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String userToken;
    @Column(nullable = false)
    private String userName;

    private Float height;
    private String gender;

    @Column(nullable = false, unique = true)
    private String account;
    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Builder
    public User(String userName, String account, String password,
                String userToken,
                Float height,
                Status status,
                String gender) {
        if (!StringUtils.hasLength(userName)) throw new RuntimeException("empty name");
        if (!StringUtils.hasLength(account)) throw new RuntimeException("empty account");
        if (!StringUtils.hasLength(password)) throw new RuntimeException("empty password");
        if (height != null) this.height = height;
        if (StringUtils.hasLength(gender)) this.gender = gender;

        if (StringUtils.hasLength(userToken)){
            this.userToken = userToken;
            this.status = status;
        } else {
            final String CLIENT_PREFIX = "cli_";
            this.userToken = TokenGenrator.randomChracterWithPrefix(CLIENT_PREFIX);
            this.status = Status.ENABLE;
        }
        this.userName = userName;
        this.account = account;
        this.password = password;
    }

    public void update(UserCommand.UpdateCommand command){
        if (StringUtils.hasLength(command.getUserName())) this.userName = command.getUserName();
        if (StringUtils.hasLength(command.getAccount())) this.account = command.getAccount();
        if (command.getHeight() != null) this.height = command.getHeight();
        if (StringUtils.hasLength(command.getGender())) this.gender = command.getGender();
        if (StringUtils.hasLength(command.getPassword())) this.password = command.getPassword();

    }

    @Getter
    @RequiredArgsConstructor
    public enum Status {
        ENABLE( "활성화"), DISABLE("비활성화");

        private final String description;
    }

    public void enable() {
        this.status = Status.ENABLE;
    }
    public void disable() {
        this.status = Status.DISABLE;
    }
}
