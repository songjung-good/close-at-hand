package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;

import java.util.List;

public interface ClothesService {
    ClothesInfo createClothes(ClothesCommand.CreateCommand command);
    ClothesInfo findClothes(Long clothesId);
    List<String> findAllClothesTag(String userToken);
}
