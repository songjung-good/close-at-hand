package dev.rainbowmirror.closeathand.domain.ootd;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

public interface OotdReader {
    Ootd getOotd(Long ootdId);
    List<Ootd> getAllOotd(String userToken);
    Optional<Ootd> getOotdBetween(ZonedDateTime before, ZonedDateTime after, String userToken);
}
