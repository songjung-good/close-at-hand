package dev.rainbowmirror.closeathand.domain.ootd;

import java.util.List;
import java.util.Optional;

public interface OotdService {
    List<OotdInfo> getOotds();
    Optional<OotdInfo> getOotd();
    OotdInfo createOotd();
    OotdInfo deleteOotd();
    OotdInfo updateOotd();
}
