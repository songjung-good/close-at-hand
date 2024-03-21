package dev.rainbowmirror.closeathand.interfaces.ootd;

import dev.rainbowmirror.closeathand.application.ootd.OotdFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import dev.rainbowmirror.closeathand.domain.ootd.OotdInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/ootd")
@Tag(name = "Ootd",
        description = "Ootd 관련 api")
public class OotdApiController {
    private final OotdFacade ootdFacade;

    @Operation(summary = "오늘 날짜 Ootd 저장", description = "오늘날짜의 Ootd 저장, 이미 있다면 갱신합니다 이전값은 삭제됨")
    @ApiResponses(
            @ApiResponse(responseCode = "200", description = "success",
                    content = {@Content(schema = @Schema(implementation = OotdInfo.class))})
    )
    @PostMapping
    public CommonResponse saveOotd(@RequestBody OotdDto.CreateRequest request){
        System.out.println(request);
        OotdInfo ootdInfo = ootdFacade.saveOotd(request.toCommand());
        System.out.println(ootdInfo);
        return CommonResponse.success(ootdInfo);
    }

    @Operation(summary = "오늘 날짜 Ootd 상세", description = "당일 Ootd를 조회합니다, 없을시 noImage 값")
    @GetMapping("/today")
    public CommonResponse getTodayOotd(@RequestHeader String userToken){
        OotdInfo.Detail ootdInfo = ootdFacade.getTodayOotd(userToken);
        return CommonResponse.success(ootdInfo);
    }

    @Operation
    @GetMapping
    public CommonResponse getOotds(@RequestHeader String userToken){
        List<OotdInfo> ootdInfoList = ootdFacade.getOotds(userToken);
        return CommonResponse.success(ootdInfoList);
    }
}
