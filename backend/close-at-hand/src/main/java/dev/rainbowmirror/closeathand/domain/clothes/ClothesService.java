package dev.rainbowmirror.closeathand.domain.clothes;

public interface ClothesService {
    ClothesInfo createClothes(ClothesCommand.CreateCommand command);
    ClothesInfo findClothes(Long clothesId);
}
