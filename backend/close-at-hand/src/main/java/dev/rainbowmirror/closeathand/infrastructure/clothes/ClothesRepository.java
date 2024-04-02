package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface ClothesRepository extends JpaRepository<Clothes, Long> {
    @Query("SELECT ct " +
            "FROM ClothesTag ct " +
            "LEFT JOIN ClothesTagGroup ctg " +
            "ON ctg = ct.clothesTagGroup " +
            "WHERE ctg.clothes.user.userToken = :userToken")
    Set<ClothesTag> findDistinctTagByUserToken(String userToken);

    List<Clothes> findAllByUserUserToken(String userToken);

    Clothes findByClothesToken(String clothesToken);

    @Query("SELECT c FROM Clothes c where c.location = :description")
    List<Clothes> findEnabledClothes(@Param("description") Clothes.Location description);

}
