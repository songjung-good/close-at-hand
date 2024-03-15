package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.application.user.UserFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.user.UserCommand;
import dev.rainbowmirror.closeathand.domain.user.UserInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Tag(name = "User",
    description = "유저 관련 api")
public class UserApiController {
//    1. dto -> command
//    2, facade 호출 entityInfo
//    3. return commonResponse (entityInfo converted)
    private final UserFacade userFacade;

    @Operation(summary = "아이디 생성", description = "회원가입 api, 유저의 정보를 데이터베이스에 저장합니다.")
    @PostMapping
    public CommonResponse signup(@RequestBody UserDto.SignupRequest request){
        UserCommand.CreateCommand createCommand = request.toCommand();
        UserInfo userInfo = this.userFacade.signup(createCommand);
        UserDto.SignupResponse response = new UserDto.SignupResponse(userInfo);
        return CommonResponse.success(response);
    }

    @Operation(summary = "정보 수정", description = "키, 성별 등 유저 정보 변경, 계정 비밀번호도 변경, password 는 나중에 분리예정")
    @PutMapping
    public CommonResponse updateUser(@RequestBody UserDto.updateRequest request){
        var updateCommand = request.toCommand();
        var userInfo = this.userFacade.updateUser(updateCommand);
        UserDto.UpdateResponse response = new UserDto.UpdateResponse(userInfo);
        return CommonResponse.success(response);
    }

    @Operation(summary = "유저 삭제", description = "유저 정보를 soft delete, 권한확인은 추후 추가")
    @DeleteMapping("/{userToken}")
    public CommonResponse deleteUser(@PathVariable String userToken){
        var userInfo = this.userFacade.disableUser(userToken);
        UserDto.DeleteResponse response = new UserDto.DeleteResponse(userInfo);
        return CommonResponse.success(response);
    }
}
