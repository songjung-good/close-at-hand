package dev.rainbowmirror.closeathand.interfaces.ootd;

import dev.rainbowmirror.closeathand.application.ootd.OotdFacade;
import dev.rainbowmirror.closeathand.common.response.CommonResponse;
import dev.rainbowmirror.closeathand.domain.ootd.OotdInfo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/ootd")
@Tag(name = "Ootd")
@CrossOrigin("*")
public class OotdApiController {
    private final OotdFacade ootdFacade;

    @Operation(summary = "오늘 날짜 Ootd 저장", description = "오늘날짜의 Ootd 저장, 이미 있다면 갱신합니다 이전값은 삭제됨")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "success", useReturnTypeSchema = true,
                    content = @Content( schema = @Schema(implementation = OotdInfo.class)))
    })
    @PostMapping
    public CommonResponse<OotdInfo> saveOotd(@RequestBody OotdDto.CreateRequest request){
        OotdInfo ootdInfo = ootdFacade.saveOotd(request.toCommand());
        return CommonResponse.success(ootdInfo);
    }

    @Operation(summary = "오늘 날짜 Ootd 상세", description = "당일 Ootd를 조회합니다, 없을시 noImage")
    @GetMapping("/today")
    public CommonResponse<OotdInfo.Detail> getTodayOotd(@RequestHeader String userToken){
        OotdInfo.Detail ootdInfo = ootdFacade.getTodayOotd(userToken);
        return CommonResponse.success(ootdInfo);
    }

    @Operation(summary = "Ootd 전체조회", description = "Ootd를 조회")
    @GetMapping
    public CommonResponse<List<OotdInfo>> getOotds(@RequestHeader String userToken){
        List<OotdInfo> ootdInfoList = ootdFacade.getOotds(userToken);
        return CommonResponse.success(ootdInfoList);
    }
}
