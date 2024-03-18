package dev.rainbowmirror.closeathand.domain.clothes;

public interface ClothesStore {
    Clothes store(Clothes initClothes); // 저장
    // 만약에 update를 하고싶을때 여기 정의해두고 impl에서 구현하기
}
