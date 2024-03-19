package dev.rainbowmirror.closeathand.application.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesFacade {
    private final ClothesService clothesService;

    public ClothesInfo createClothes(ClothesCommand.CreateCommand createCommand) {
        ClothesInfo clothesInfo = clothesService.createClothes(createCommand);
        // 옴니커머스로 데이터 보내고 정보 받아오기
        return clothesInfo;
    }

    public ClothesInfo findClothes(Long clothesId) {
        ClothesInfo clothesInfo = clothesService.findClothes(clothesId);
        return clothesInfo;
    }
}
