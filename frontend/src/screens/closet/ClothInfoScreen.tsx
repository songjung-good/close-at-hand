import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// 컴포넌트
import { FONTSIZE, COLORS } from "../../shared";
// API
// import { AxiosError } from "axios";
import { API } from "../../shared";

interface ClothInfo {
  clothesId: number,
  clothesImgUrl: string,
  lastWashDate: string,
  texture: string[],
  category: string[],
  item: string[],
  colors: string[],
  looks: string[],
  prints: string[],
}


const ClothInfoScreen: React.FC<{ route: any }> = ({ route }) => {
  const clothId = route.params.id;
  const [clothesInfo, setClothesInfo] = useState<ClothInfo | null>(null);

  useEffect(() => {
    const fetchClothInfo = async () => {
      try {
        const response = await API.get(`clothes/${clothId}`);
        if (response.data.result === "SUCCESS") {
          const clothData = response.data.data;
          setClothesInfo(clothData);
        } else {
          console.error("옷 정보를 받아오지 못했어요... 서버 나빠!");
        }
      } catch (error) {
        console.error("오류:", error);
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
        <Text style={styles.infoText}>종류: {clothesInfo.category.join(', ')}</Text>
        <Text style={styles.infoText}>색상: {clothesInfo.colors.join(', ')}</Text>
        <Text style={styles.infoText}>아이템: {clothesInfo.item.join(', ')}</Text>
        <Text style={styles.infoText}>룩: {clothesInfo.looks.join(', ')}</Text>
        <Text style={styles.infoText}>프린트: {clothesInfo.prints.join(', ')}</Text>
        <Text style={styles.infoText}>마지막 세탁일: {clothesInfo.lastWashDate}</Text>
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

export default ClothInfoScreen;
