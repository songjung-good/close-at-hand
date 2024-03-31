package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesReader;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Slf4j
@Component
@RequiredArgsConstructor
public class ClothesReaderImpl implements ClothesReader {
    private final ClothesRepository clothesRepository;

    @Override
    public Clothes findClothes(Long clothesId) { // 옷 id로 옷 정보 가져오기
        return clothesRepository.getReferenceById(clothesId);
    }

    @Override
    public Clothes findClothesByClothesToken(String clothesToken) { return clothesRepository.findByClothesToken(clothesToken);}
    @Override
    public List<Clothes> findAllClothes(String userToken) {
        return clothesRepository.findAllByUserUserToken(userToken);
    }

    @Override
    public Set<ClothesTag> findDistinctTagByUserToken(String userToken) {
        return clothesRepository.findDistinctTagByUserToken(userToken);
    }
}
