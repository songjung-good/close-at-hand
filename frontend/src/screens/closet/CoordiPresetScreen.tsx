import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FONTSIZE, COLORS } from "../../shared";

import { presetClothes } from "./presetInfo";

interface presetInfo {
  presetId: number,
  clothes: {
    clothesId: number,
    clothesImgUrl: string,
    detection: string,
    lastWashDate: string,
    price: number,
  }[]
}

const CoordiPresetScreen: React.FC<{ route: any }> = ({ route }) => {
  const presetId = route.params.id;
  const [ presetInfo, setPresetInfo ] = useState< presetInfo | null > (null);

  useEffect(() => {
    const fetchPresetInfo = () => {
      const foundPreset = presetClothes.find((preset) => preset.presetId === presetId);
      if (foundPreset) {
        // 옷 정보를 설정합니다.
        setPresetInfo(foundPreset);
      }
    };
    fetchPresetInfo();
  }, [presetId]);

  return (
    <>
    {presetInfo ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: presetInfo.clothes.find }} style={styles.image} />
      </View>
      <ScrollView style={styles.infoContainer}>
        {/* <Text style={styles.infoText}>종류: {presetInfo.clothes}</Text> */}
        {/* <Text style={styles.infoText}>가격: {presetInfo.clothes[4]}원</Text> */}
        {/* <Text style={styles.infoText}>마지막 세탁일: {presetInfo.clothes[3]}</Text> */}
      </ScrollView>
    </View>
    ) : (
      <View>
        <Text>옷 정보를 가져오는 중입니다...</Text>
      </View>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    height: '65%',
  },
  image: {
    width: "100%",
    height: "100%", // 이미지 크기 조절
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: FONTSIZE.Medium, // 폰트 크기 조절
    color: COLORS.Black, // 폰트 색상 조절
    borderBottomWidth: 1, // border-bottom-line 추가
    borderBottomColor: COLORS.Gray, // border-bottom-line 색상 조절
    marginBottom: 5,
  },
});

export default CoordiPresetScreen;
