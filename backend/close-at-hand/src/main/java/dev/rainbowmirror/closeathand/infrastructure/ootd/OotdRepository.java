package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

public interface OotdRepository extends JpaRepository<Ootd, Long> {
    Optional<Ootd> findByCreatedAtBetweenAndUserUserToken(ZonedDateTime before, ZonedDateTime after, String userToken);
    List<Ootd> findByUserUserToken(String userToken);
    void deleteByOotdId(Long OotdId);
}
