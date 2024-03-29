package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.common.exception.EntityNotFoundException;
import dev.rainbowmirror.closeathand.domain.S3UploadService;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesReader;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesUpdateTool;
import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class OotdServiceImpl implements OotdService{
    private final OotdStore ootdStore;
    private final OotdReader ootdReader;
    private final UserReader userReader;
    private final ClothesReader clothesReader;
    private final S3UploadService s3UploadService;
    private final ClothesUpdateTool clothesUpdateTool;
    @Override
    public List<OotdInfo> getOotds(String userToken) {
        List<OotdInfo> ootdInfoList = new ArrayList<>();
        for (Ootd ootd:ootdReader.getAllOotd(userToken)){
            ootdInfoList.add(new OotdInfo(ootd));
        }
        return ootdInfoList;
    }

    @Override
    public OotdInfo.Detail getOotd(Long ootdId) {
        Ootd ootd = ootdReader.getOotd(ootdId);
        OotdInfo.Detail ootdDetail = new OotdInfo.Detail(ootd);
        return ootdDetail;
    }

    @Override
    public OotdInfo.Detail getTodayOotd(String userToken) {
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"))
                .withHour(0)
                .withMinute(0)
                .withSecond(0);

        // 오늘자 처음 요청인 경우, 빈 Ootd 생성
        Ootd ootd = ootdReader.getOotdBetween(today, today.plusDays(1), userToken)
                .orElse(Ootd.builder()
                        .user(userReader.getUser(userToken))
                        .build()
        );
        return new OotdInfo.Detail(ootd);
    }

    @Override
    public OotdInfo saveOotd(OotdCommand.CreateCommand command) throws IOException {
        // 오늘날짜
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"))
                .withHour(0)
                .withMinute(0)
                .withSecond(0);
        // 오늘자 이미 있으면 갱신, 아니면 새로 추가
        Ootd ootd = ootdReader.getOotdBetween(today, today.plusDays(1), command.getUserToken())
                .orElse(Ootd.builder()
                        .user(userReader.getUser(command.getUserToken()))
                        .clothes(new HashSet<>())
                        .build());
        // 옷 등록
        ootd.getClothes().clear();
        for (Long clothesId: command.getClothesIdList()){
            ootd.addClothes(clothesUpdateTool.update(clothesReader.findClothes(clothesId)));
        }
        ootdStore.store(ootd);
        // 이미지 저장
        String ootdImgUrl = s3UploadService.saveFile(command.getOotdImg(), command.getFilename(ootd.getOotdId()));
        ootd.setOotdImgUrl(ootdImgUrl);
        return new OotdInfo(ootd);
}

    @Override
    public void deleteOotd(Long ootdId) {
        ootdStore.delete(ootdId);
    }

}
