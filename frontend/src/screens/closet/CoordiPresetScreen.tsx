import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FONTSIZE, COLORS } from "../../shared";

import { presetList } from "./presetInfo";

interface presetInfo {
  clothesId: "number",
  clothesImgUrl: "string",
  detection: "string",
  lastWashDate: "string",
  price: "number"
}

const CoordiPresetScreen: React.FC<{ route: any }> = ({ route }) => {
  const { clothId } = route.params;
  const [ presetInfo, setPresetInfo ] = useState< presetInfo | null > (null);

  const handlePresetNavigation = (presetId: number) => {
    // 프리셋을 누르면 해당 프리셋의 옷 목록을 보여줄 수 있는 기능 추가
    navigation.navigate('preset', { presetId });
  };


  useEffect(() => {
    // clothId를 기반으로 해당 옷 정보를 가져옵니다.
    const fetchClothInfo = () => {
      // clothList에서 clothId와 일치하는 옷 정보를 찾습니다.
      const foundCloth = clothList.find((cloth) => cloth.clothesId === clothId);
      if (foundCloth) {
        // 옷 정보를 설정합니다.
        setClothesInfo(foundCloth);
      }
    };
    fetchClothInfo();
  }, [clothId]);

  return (
    <>
    {clothesInfo ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: clothesInfo.clothesImgUrl }} style={styles.image} />
      </View>
      <ScrollView style={styles.infoContainer}>
        {/* <Text style={styles.infoText}>이름: {clothInfo.name}</Text> */}
        {/* <Text style={styles.infoText}>색상: {clothInfo.color}</Text> */}
        {/* <Text style={styles.infoText}>사이즈: {clothInfo.size}</Text> */}
        {/* <Text style={styles.infoText}>브랜드: {clothInfo.brand}</Text> */}
        <Text style={styles.infoText}>종류: {clothesInfo.detection}</Text>
        <Text style={styles.infoText}>가격: {clothesInfo.price}원</Text>
        <Text style={styles.infoText}>마지막 세탁일: {clothesInfo.lastWashDate}원</Text>
        {/* <Text style={styles.infoText}>소재: {clothInfo.material}</Text> */}
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
