package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ClothesRepository extends JpaRepository<Clothes, Long> {
    @Query("SELECT distinct ct.tagName FROM ClothesTagGroup ctg LEFT JOIN ClothesTag ct ON ctg = ct.clothesTagGroup WHERE ctg.clothes.user.userToken = :userToken")
    Set<ClothesTag> findDistinctTagByUserToken(String userToken);

    List<Clothes> findAllByUserUserToken(String userToken);

    Clothes findByClothesToken(String clothesToken);

}
