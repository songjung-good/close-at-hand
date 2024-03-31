package dev.rainbowmirror.closeathand.domain.preset;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.ClothesInfo;
import dev.rainbowmirror.closeathand.domain.user.User;
import lombok.Getter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Getter
@ToString
public class PresetInfo {
    private final Long presetId;
    private final String presetImgUrl;
    private final String presetName;
    private final Set<ClothesInfo> clothes = new HashSet<>();

    public PresetInfo(Preset preset) {
        this.presetId = preset.getPresetId();
        this.presetImgUrl = preset.getPresetImgUrl();
        this.presetName = preset.getPresetName();
        for (Clothes c : preset.getClothes()) {
            this.clothes.add(new ClothesInfo(c));
        }
    }
}
