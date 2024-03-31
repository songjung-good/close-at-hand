package dev.rainbowmirror.closeathand.domain.ootd;

public interface OotdStore {
    Ootd store(Ootd initOotd);
    void delete(Long ootdId);
}
