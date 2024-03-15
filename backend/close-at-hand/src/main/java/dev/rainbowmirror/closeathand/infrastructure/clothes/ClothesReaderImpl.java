package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class ClothesReaderImpl implements ClothesReader {
    private final ClothesRepository clothesRepository;

    @Override
    public Clothes getClothes(Long clothesId) {
        // 앞에 this를 붙여야하나? yes. 왜??
        return this.clothesRepository.getReferenceById(clothesId);
    }
}
