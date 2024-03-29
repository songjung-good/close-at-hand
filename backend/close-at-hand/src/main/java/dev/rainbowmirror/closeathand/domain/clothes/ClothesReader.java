package dev.rainbowmirror.closeathand.domain.clothes;

import java.util.List;

public interface ClothesReader { // read
    // 옷 id로 옷 정보 읽기
    Clothes findClothes(Long clothesId);
    List<Clothes> findAllClothes(String userToken);
}
