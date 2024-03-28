package dev.rainbowmirror.closeathand.infrastructure.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.ootd.Ootd;
import dev.rainbowmirror.closeathand.domain.ootd.OotdDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.ZonedDateTime;
import java.util.List;

public interface OotdDetailRepository extends JpaRepository<OotdDetail, Long> {
    /** 기간내 가장 많이 입은 옷 5개*/
    @Query("SELECT od.clothes FROM OotdDetail od WHERE od.createdAt >= :startDate AND od.createdAt <= :endDate GROUP BY od.clothes ORDER BY COUNT(od.clothes) DESC LIMIT 5")
    List<Clothes> findTop5ClothsInMonth(@Param("startDate") ZonedDateTime startDate, @Param("endDate") ZonedDateTime endDate);
}
