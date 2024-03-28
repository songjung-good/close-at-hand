package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.common.exception.EntityNotFoundException;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import dev.rainbowmirror.closeathand.domain.ootd.OotdStore;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class OotdStoreImpl implements OotdStore {
    private final OotdRepository ootdRepository;
    @Override
    public Ootd store(Ootd initOotd) {
        return ootdRepository.save(initOotd);
    }

    @Override
    public void delete(Long ootdId) {ootdRepository.deleteByOotdId(ootdId);}
}
