package dev.rainbowmirror.closeathand.domain.ootd;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesReader;
import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
    @Override
    public List<OotdInfo> getOotds(String userToken) {
        List<OotdInfo> ootdInfoList = new ArrayList<>();
        for (Ootd ootd:ootdReader.getAllOotd(userToken)){
            ootdInfoList.add(new OotdInfo(ootd));
        }
        return ootdInfoList;
    }

    @Override
    public Optional<OotdInfo> getOotd(Long ootdId) {
        return Optional.empty();
    }

    @Override
    public OotdInfo.Detail getTodayOotd(String userToken) {
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"))
                .withHour(0)
                .withMinute(0)
                .withSecond(0);
        User user = userReader.getUser(userToken);
        Ootd ootd = ootdReader.getOotdBetween(today, today.plusDays(1), userToken)
                .orElse(Ootd.builder()
                        .user(user)
                        .build()
        );
        return new OotdInfo.Detail(ootd);
    }

    @Override
    public OotdInfo saveOotd(OotdCommand.CreateCommand command) {
        // 오늘날짜
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"))
                .withHour(0)
                .withMinute(0)
                .withSecond(0);
        // 없을경우 만들 ootd >  builder로 고쳐야 함
        User user = userReader.getUser(command.getUserToken());
        Ootd initOotd = command.toEntity(user,new HashSet<>());

        Ootd ootd = ootdReader.getOotdBetween(today, today.plusDays(1), user.getUserToken())
                .orElse(initOotd);
        ootd.getClothes().clear();
        for (Long clothesId: command.getClothesIdList()){
            ootd.addClothes(clothesReader.findClothes(clothesId));
        }

        return new OotdInfo(ootdStore.store(ootd));
    }

    @Override
    public OotdInfo deleteOotd(Long ootdId) {
        return null;
    }

    @Override
    public OotdInfo updateOotd(OotdCommand.UpdateCommand command) {
        return null;
    }

}
