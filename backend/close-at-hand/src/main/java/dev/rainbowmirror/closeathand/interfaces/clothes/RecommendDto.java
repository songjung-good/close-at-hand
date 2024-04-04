package dev.rainbowmirror.closeathand.interfaces.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.ClothesListInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class RecommendDto {
    private List<ClothesListInfo> Top5UsedClothes;

    @Builder
    public RecommendDto(List<ClothesListInfo> top5UsedClothes){
        this.Top5UsedClothes = top5UsedClothes;
    }
}
