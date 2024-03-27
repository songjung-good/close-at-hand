package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.S3UploadService;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesReader;
import dev.rainbowmirror.closeathand.domain.user.User;
import dev.rainbowmirror.closeathand.domain.user.UserReader;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class PresetServiceImpl implements PresetService{
    private final PresetReader presetReader;
    private final PresetStore presetStore;
    private final UserReader userReader;
    private final ClothesReader clothesReader;
    private final S3UploadService s3UploadService;
    @Override
    public PresetInfo insertPreset(PresetCommand.InsertCommand command) {
        var user = userReader.getUser(command.getUserToken());
        command.setUser(user);
        Set<Clothes> clothes = new HashSet<>();
        for (Long clothesId: command.getClothesIdList()){
            clothes.add(clothesReader.findClothes(clothesId));
        }
        command.setClothes(clothes);
        var initPreset = command.toEntity();
        var preset = presetStore.store(initPreset);
        try {
            String presetImgUrl = s3UploadService.saveFile(command.getPresetImg(), preset.getFilename());
            preset.changeImgUrl(presetImgUrl);
            PresetInfo presetInfo = new PresetInfo(preset);
            return presetInfo;
        } catch (IOException e){
            throw new RuntimeException("이미지 저장 실패");
        }
    }

    @Override
    public List<PresetInfo> getPresetByUserToken(String userToken) {
        List<Preset> list = presetReader.getPresets(userToken);
        List<PresetInfo> presetInfos = new ArrayList<>();
        for (Preset preset: list) {presetInfos.add(new PresetInfo(preset));}
        return presetInfos;
    }

    @Override
    public PresetInfo getPreset(Long presetId) {
        Preset preset = presetReader.getPreset(presetId);
        return new PresetInfo(preset);
    }

    @Override
    public PresetInfo deletePreset(Long presetId) {
        return null;
    }
}
