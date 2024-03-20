package dev.rainbowmirror.closeathand.application.ootd;

import dev.rainbowmirror.closeathand.domain.ootd.OotdCommand;
import dev.rainbowmirror.closeathand.domain.ootd.OotdInfo;
import dev.rainbowmirror.closeathand.domain.ootd.OotdService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class OotdFacade {
    private final OotdService ootdService;

    public OotdInfo getTodayOotd(String userToken){
        return ootdService.getTodayOotd(userToken);
    }

    public OotdInfo saveOotd(OotdCommand.CreateCommand command){
        return ootdService.saveOotd(command);
    }
}
