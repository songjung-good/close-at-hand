package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;

import java.util.List;
import java.util.Set;

public interface ClothesReader { // read
    // 옷 id로 옷 정보 읽기
    Clothes findClothes(Long clothesId);

    Clothes findClothesByClothesToken(String clothesToken);

    List<Clothes> findAllClothes(String userToken);

    Set<ClothesTag> findDistinctTagByUserToken(String userToken);

}
