package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.application.user.UserFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.user.UserCommands;
import dev.rainbowmirror.closeathand.domain.user.UserInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserApiController {
//    1. dto -> command
//    2, facade 호출 entityInfo
//    3. return commonResponse (entityInfo converted)
    private final UserFacade userFacade;

    @PostMapping
    public CommonResponse signup(@RequestBody UserDto.SignupRequest request){
        UserCommands.UserCommand userCommand = request.toCommand();
        UserInfo userInfo = this.userFacade.signup(userCommand);
        UserDto.SignupResponse response = new UserDto.SignupResponse(userInfo);
        return CommonResponse.success(response);
    }

    @PutMapping
    public CommonResponse updateUser(@RequestBody UserDto.updateRequest request){
        var updateCommand = request.toCommand();
        var userInfo = this.userFacade.updateUser(updateCommand);
        UserDto.UpdateResponse response = new UserDto.UpdateResponse(userInfo);
        return CommonResponse.success(response);
    }

    @DeleteMapping("/{userToken}")
    public CommonResponse deleteUser(@PathVariable String userToken){
        var userInfo = this.userFacade.disableUser(userToken);
        UserDto.DeleteResponse response = new UserDto.DeleteResponse(userInfo);
        return CommonResponse.success(response);
    }
}
