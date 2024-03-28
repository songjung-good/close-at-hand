package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClothesTagGroupRepository extends JpaRepository<ClothesTagGroup, Integer> {
    @Query("SELECT ctg.clothesTagGroupName FROM ClothesTagGroup ctg LEFT JOIN ctg.clothes c WHERE c.user.userToken = ?")
    List<String> findAllByClothesUserUserToken(String userToken);
}
