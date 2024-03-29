package dev.rainbowmirror.closeathand.domain.clothes;

import lombok.Getter;

import java.util.List;

@Getter
public class ClothesRecommendInfo {
    private final List<List<ClothesListInfo>> recommendList;

    public ClothesRecommendInfo(List<List<ClothesListInfo>> recommendList) {
        this.recommendList = recommendList;
    }
}
