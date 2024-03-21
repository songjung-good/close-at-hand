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
        String filename = createCommand.getFilename();

        String clothesImgUrl = s3UploadService.saveFile(createCommand.getClothesImage(), filename);
        int statusCode = omniCommerceService.postClothes(createCommand.getClothesToken(), clothesImgUrl, createCommand.getUserToken());
        if ( 200 != statusCode){
            s3UploadService.deleteFile(filename);
            throw new RuntimeException("이미지 탐색에 실패했습니다.");
        }

        ClothesInfo clothesInfo = clothesService.createClothes(ClothesCommand.CreateCommand.builder()
                        .userToken(createCommand.getUserToken())
                        .clothesImgUrl(clothesImgUrl)
                        .build());
        return clothesInfo;
    }

    public ClothesInfo findClothes(Long clothesId) {
        ClothesInfo clothesInfo = clothesService.findClothes(clothesId);
        return clothesInfo;
    }
}
