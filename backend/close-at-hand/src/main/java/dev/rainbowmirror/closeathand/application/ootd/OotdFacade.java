package dev.rainbowmirror.closeathand.application.ootd;

import dev.rainbowmirror.closeathand.domain.S3UploadService;
import dev.rainbowmirror.closeathand.domain.ootd.OotdCommand;
import dev.rainbowmirror.closeathand.domain.ootd.OotdInfo;
import dev.rainbowmirror.closeathand.domain.ootd.OotdService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OotdFacade {
    private final OotdService ootdService;

    public OotdInfo.Detail getTodayOotd(String userToken){
        return ootdService.getTodayOotd(userToken);
    }
    public OotdInfo.Detail getOotd(Long ootdId){
        return ootdService.getOotd(ootdId);
    }

    public OotdInfo saveOotd(OotdCommand.CreateCommand command) throws IOException {
        OotdInfo ootdInfo = ootdService.saveOotd(command);
        return ootdInfo;
    }

    public List<OotdInfo> getOotds(String userToken){
        return ootdService.getOotds(userToken);
    }

    public void deleteOotd(Long ootdId){
        ootdService.deleteOotd(ootdId);
    }
}
