package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagAllInfo;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroupInfo;

import java.util.List;
import java.util.Map;

public interface ClothesService {
    ClothesInfo createClothes(ClothesCommand.CreateCommand command);
    ClothesInfo findClothes(Long clothesId);

    ClothesInfo findClothesByClothesToken(String clothesToken);
    List<ClothesInfo> findAllClothes(String userToken);
    List<ClothesTagAllInfo> findAllClothesTag(String userToken);
    ClothesInfo updateClothes(ClothesCommand.UpdateCommand command);
}
