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
        return clothesInfo;
    }
}
