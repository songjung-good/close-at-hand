package dev.rainbowmirror.closeathand.domain.ootd;

import java.util.List;
import java.util.Optional;

public interface OotdService {
    List<OotdInfo> getOotds(String userToken);
    Optional<OotdInfo> getOotd(Long ootdId);
    OotdInfo.Detail getTodayOotd(String userToken);
    OotdInfo saveOotd(OotdCommand.CreateCommand command);
    OotdInfo deleteOotd(Long ootdId);
    OotdInfo updateOotd(OotdCommand.UpdateCommand command);
}
