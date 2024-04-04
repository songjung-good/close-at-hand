package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface OotdRepository extends JpaRepository<Ootd, Long> {
    Optional<Ootd> findByCreatedAtBetweenAndUserUserToken(ZonedDateTime before, ZonedDateTime after, String userToken);
    List<Ootd> findByUserUserToken(String userToken);
    void deleteByOotdId(Long OotdId);

    /** 기간내 가장 많이 입은 옷 5개*/
    @Query("SELECT c " +
            "FROM Ootd o " +
            "JOIN o.clothes c " +
            "WHERE o.createdAt BETWEEN :startDate AND :endDate " +
            "AND c.user.userToken = :userToken " +
            "GROUP BY c.clothesId " +
            "ORDER BY COUNT(c.clothesId) DESC")
    List<Clothes> findTop5ClothsInMonth(@Param("startDate") ZonedDateTime startDate, @Param("endDate") ZonedDateTime endDate, @Param("userToken") String userToken);
}
