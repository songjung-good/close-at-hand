package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.application.user.UserFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.user.UserCommand;
import dev.rainbowmirror.closeathand.domain.user.UserInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserApiController {
//    1. dto -> command
//    2, facade 호출 entityInfo
//    3. return commonResponse (entityInfo converted)
    private final UserFacade userFacade;

    @PostMapping
    public CommonResponse signup(@RequestBody UserDto.SignupRequest request){
        UserCommand userCommand = request.toCommand();
        UserInfo userInfo = this.userFacade.signup(userCommand);
        UserDto.SignupResponse response = new UserDto.SignupResponse(userInfo);
        return CommonResponse.success(response);
    }
}
