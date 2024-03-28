package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.common.exception.EntityNotFoundException;
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
    public Ootd getOotd(Long ootdId) {
        return ootdRepository.findById(ootdId).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Ootd> getAllOotd(String userToken) {
        return ootdRepository.findByUserUserToken(userToken);
    }

    @Override
    public Optional<Ootd> getOotdBetween(ZonedDateTime before, ZonedDateTime after, String userToken) {
        return ootdRepository.findByCreatedAtBetweenAndUserUserToken(before, after, userToken);
    }
}
