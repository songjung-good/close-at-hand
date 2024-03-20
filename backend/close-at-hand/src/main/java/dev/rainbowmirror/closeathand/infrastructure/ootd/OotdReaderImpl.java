package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import dev.rainbowmirror.closeathand.domain.ootd.OotdReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class OotdReaderImpl implements OotdReader {
    private final OotdRepository ootdRepository;
    @Override
    public Optional<Ootd> getOotd(String userToken, Long ootdId) {
        return ootdRepository.findById(ootdId);
    }

    @Override
    public List<Ootd> getAllOotd(String userToken) {
        return null;
    }

    @Override
    public Optional<Ootd> getOotdBetween(ZonedDateTime before, ZonedDateTime after, String userToken) {
        return ootdRepository.findByCreatedAtBetweenAndUserUserToken(before, after, userToken);
    }
}
