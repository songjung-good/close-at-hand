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
    public Clothes findClothes(Long clothesId) { // 옷 id로 옷 정보 가져오기
        return this.clothesRepository.getReferenceById(clothesId);
    }
}
