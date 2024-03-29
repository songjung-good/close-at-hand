package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;

import java.util.List;

public interface ClothesService {
    ClothesInfo createClothes(ClothesCommand.CreateCommand command);
    ClothesInfo findClothes(Long clothesId);
    List<ClothesListInfo> findAllClothes(String userToken);
    List<String> findAllClothesTag(String userToken);
    ClothesInfo updateClothes(ClothesCommand.UpdateCommand command);
}
