package dev.rainbowmirror.closeathand.interfaces.ootd;

import dev.rainbowmirror.closeathand.application.ootd.OotdFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import dev.rainbowmirror.closeathand.domain.ootd.OotdInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/ootd")
@Tag(name = "Ootd",
        description = "Ootd 관련 api")
public class OotdApiController {
    private final OotdFacade ootdFacade;

    @Operation(summary = "오늘 날짜 Ootd 저장")
    @PostMapping
    public CommonResponse saveOotd(@RequestBody OotdDto.CreateRequest request){
        System.out.println(request);
        OotdInfo ootdInfo = ootdFacade.saveOotd(request.toCommand());
        System.out.println(ootdInfo);
        return CommonResponse.success(ootdInfo);
    }

    @Operation
    @GetMapping("/today")
    public CommonResponse getTodayOotd(@RequestHeader String userToken){
        OotdInfo ootdInfo = ootdFacade.getTodayOotd(userToken);
        return CommonResponse.success(ootdInfo);
    }
}
