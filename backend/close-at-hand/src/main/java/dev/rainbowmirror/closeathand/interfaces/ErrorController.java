package dev.rainbowmirror.closeathand.interfaces;

import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ErrorController {

    @GetMapping("/error")
    public CommonResponse<String> error(HttpServletResponse response){
        return CommonResponse.success("check token");
    }

}
