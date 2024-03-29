import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// 컴포넌트
import { FONTSIZE, COLORS } from "../../shared";
// 임시데이터
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
  
  const navigation = useNavigation<Navigation>()

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

  const handleClothItemPress = (clothesId: number) => {
    navigation.navigate('cloth', { id: clothesId });
  }

  return (
    <>
    {presetInfo ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: presetInfo.clothes[0].clothesImgUrl }} style={styles.image} />
      </View>
      <ScrollView style={styles.infoContainer}>
        {presetInfo.clothes.map((clothes, index) => (
          <TouchableOpacity key={index} style={styles.infoItem} onPress={() => handleClothItemPress(clothes.clothesId)}>
            <View style={styles.infoImageContainer}>
              <Image style={styles.infoImg} source={{ uri: clothes.clothesImgUrl }} />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>종류: {clothes.detection}</Text>
              <Text style={styles.infoText}>가격: {clothes.price}원</Text>
              <Text style={styles.infoText}>마지막 세탁일: {clothes.lastWashDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%", // 이미지 크기 조절
  },
  infoContainer: {
    flex: 2,
  },
  infoItem: {
    flexDirection: 'row', // 가로로 배치되도록 설정
    borderColor: COLORS.Mint,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  infoImageContainer: {
    flex: 1, // 왼쪽 1/3 공간을 차지하도록 설정
    marginRight: 10, // 이미지와 텍스트 사이의 간격 조절
  },
  infoImg: {
    width: '100%', // 이미지를 컨테이너의 가로 길이에 맞게 조정
    height: 120, // 이미지의 높이 설정 (원하는 크기로 변경 가능)
    borderRadius: 5, // 이미지에 테두리를 둥글게 만듭니다.
    // resizeMode: 'contain', // 이미지를 원하는 크기로 조정
  },
  infoTextContainer: {
    flex: 2, // 오른쪽 2/3 공간을 차지하도록 설정
  },
  infoText: {
    fontSize: FONTSIZE.Small, // 폰트 크기 조절
    color: COLORS.Black, // 폰트 색상 조절
    borderBottomWidth: 1, // border-bottom-line 추가
    borderBottomColor: COLORS.Gray, // border-bottom-line 색상 조절
    marginBottom: 5,
    marginLeft: 2,
  },
});

export default CoordiPresetScreen;
