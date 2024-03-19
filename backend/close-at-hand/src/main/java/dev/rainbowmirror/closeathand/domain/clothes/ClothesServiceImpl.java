package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.domain.user.UserReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


// 이 파일은 service의 내용을 실제 구현하는거
@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesServiceImpl implements ClothesService{
    private final ClothesStore clothesStore;
    private final UserReader userReader;
    private final ClothesReader clothesReader;

    @Override
    public ClothesInfo createClothes(ClothesCommand.CreateCommand command) {
        // 유저 토큰으로 user를 찾아서 넣어줘야함 -> update를 만들자X
        var user = userReader.getUser(command.getUserToken());
        Clothes initClothes = command.toEntity(user);
        Clothes clothes = clothesStore.store(initClothes);
        return new ClothesInfo(clothes);
    }

    @Override
    public ClothesInfo findClothes(Long clothesId) { // command로 안받고 그냥 id받아서 넘기기
        Clothes clothes = clothesReader.findClothes(clothesId);
        return new ClothesInfo(clothes);
    }
}