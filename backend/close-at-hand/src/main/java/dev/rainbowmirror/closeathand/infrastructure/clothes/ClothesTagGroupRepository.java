package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClothesTagGroupRepository extends JpaRepository<ClothesTagGroup, Integer> {
    List<ClothesTagGroup> findAllByClothesUserUserToken(String userToken);
}
