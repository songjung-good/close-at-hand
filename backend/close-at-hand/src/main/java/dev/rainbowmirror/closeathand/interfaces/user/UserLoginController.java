package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.application.user.UserFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
@Tag(name = "login")
@CrossOrigin("*")
public class UserLoginController {
    private final UserFacade userFacade;

    @Operation(summary = "로그인 요청")
    @PostMapping
    public CommonResponse login(@RequestBody String jwt){
        // make command
        // facade make response(jwt)
        return CommonResponse.success("tempToken");
    }

    @Operation(summary = "jwt 무효화 요청", description = "지금은 그냥 OK나가요")
    @DeleteMapping
    public CommonResponse logout(@RequestHeader("jwt") String jwt, @RequestParam() String userToken) {
        // check jwt
        return CommonResponse.success("OK," + userToken);
    }

    @Operation(summary = "아이디 중복 확인", description = "계정이 이미 있는지 확인")
    @GetMapping("/{account}")
    public CommonResponse checkDuplicate(@PathVariable("account") String account){
        var userInfo = userFacade.checkDuplicate(account);
        if (userInfo == null) return CommonResponse.success("Available");
        return CommonResponse.success("Already exist");
    }
}
