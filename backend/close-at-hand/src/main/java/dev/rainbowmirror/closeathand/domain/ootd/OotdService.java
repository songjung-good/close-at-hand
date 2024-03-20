package dev.rainbowmirror.closeathand.domain.ootd;

import java.util.List;
import java.util.Optional;

public interface OotdService {
    List<OotdInfo> getOotds(OotdCommand.SearchCommand command);
    Optional<OotdInfo> getOotd(Long ootdId);
    OotdInfo getTodayOotd(String userToken);
    OotdInfo saveOotd(OotdCommand.CreateCommand command);
    OotdInfo deleteOotd(Long ootdId);
    OotdInfo updateOotd(OotdCommand.UpdateCommand command);
}
