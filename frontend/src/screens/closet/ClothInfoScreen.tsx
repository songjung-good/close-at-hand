import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FONTSIZE, COLORS } from "../../shared";

const ClothInfoScreen: React.FC<{ route: any }> = ({ route }) => {
  // route.params에서 옷 정보를 가져옵니다.
  const { clothId } = route.params;

  // 예시로 옷 정보를 가져오는 함수를 호출하고, clothId를 기반으로 정보를 가져옵니다.
  const fetchClothInfo = () => {
    // clothId를 사용하여 서버에서 해당 옷의 정보를 가져옵니다.
    // 예시로 사용할 데이터를 리턴합니다.
    return {
      id: clothId,
      name: "티셔츠",
      image: "https://thumb.mtstarnews.com/06/2024/02/2024022309364792507_1.jpg/dims/optimize",
      color: "블랙",
      size: "M",
      brand: "Nike",
      price: 30000,
      material: "코튼",
    };
  };

  // 옷 정보를 가져옵니다.
  const clothInfo = fetchClothInfo();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: clothInfo.image }} style={styles.image} />
      </View>
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.infoText}>이름: {clothInfo.name}</Text>
        <Text style={styles.infoText}>색상: {clothInfo.color}</Text>
        <Text style={styles.infoText}>사이즈: {clothInfo.size}</Text>
        <Text style={styles.infoText}>브랜드: {clothInfo.brand}</Text>
        <Text style={styles.infoText}>가격: {clothInfo.price}원</Text>
        <Text style={styles.infoText}>소재: {clothInfo.material}</Text>
      </ScrollView>
    </View>
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
