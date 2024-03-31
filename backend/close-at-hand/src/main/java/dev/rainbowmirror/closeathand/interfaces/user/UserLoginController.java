package dev.rainbowmirror.closeathand.interfaces.user;

import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class UserLoginController {

    // login
    @PostMapping
    public CommonResponse login(@RequestBody String jwt){
        // make command
        // facade make response(jwt)
        return null;//temp
//        return CommonResponse.success(response);
    }

    // logout
    @DeleteMapping
    public CommonResponse logout(@RequestHeader("jwt") String jwt, @RequestParam() String userToken) {
        // check jwt
        return CommonResponse.success("OK");
    }
}
