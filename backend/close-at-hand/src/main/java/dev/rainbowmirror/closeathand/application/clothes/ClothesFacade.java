package dev.rainbowmirror.closeathand.application.clothes;

import dev.rainbowmirror.closeathand.domain.OmniCommerceService;
import dev.rainbowmirror.closeathand.domain.S3UploadService;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesCommand;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesFacade {
    private final ClothesService clothesService;
    private final S3UploadService s3UploadService;
    private final OmniCommerceService omniCommerceService;

    public ClothesInfo createClothes(ClothesCommand.CreateCommand createCommand) throws IOException {
        // 옴니커머스로 데이터 보내고 정보 받아오기
        String url = createCommand.getFilename();

        String clothesImgUrl = s3UploadService.saveFile(createCommand.getClothesImage(), url);

        System.out.printf(omniCommerceService.postClothes(createCommand.getClothesToken(), clothesImgUrl, createCommand.getUserToken()));

        ClothesInfo clothesInfo = clothesService.createClothes(createCommand);
        return clothesInfo;
    }

    public ClothesInfo findClothes(Long clothesId) {
        ClothesInfo clothesInfo = clothesService.findClothes(clothesId);
        return clothesInfo;
    }
}
