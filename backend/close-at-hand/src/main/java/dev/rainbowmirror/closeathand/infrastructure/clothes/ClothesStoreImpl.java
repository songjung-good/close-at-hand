package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesStore;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class ClothesStoreImpl implements ClothesStore {
    private final ClothesRepository clothesRepository;

    @Override
    public Clothes store(Clothes clothes) {
        return clothesRepository.save(clothes);
    }
}
