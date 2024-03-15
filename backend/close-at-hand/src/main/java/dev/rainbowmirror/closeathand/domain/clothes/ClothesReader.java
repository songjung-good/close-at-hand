package dev.rainbowmirror.closeathand.domain.clothes;

public interface ClothesReader {
    // 옷 id로 옷 정보 읽기
    Clothes getClothes(Long clothesId);
}
