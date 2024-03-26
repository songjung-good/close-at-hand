import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

// 옷 인터페이스
interface clothInfo {
  clothesId: "number",
  clothesImgUrl: "string",
  detection: "string",
  lastWashDate: "string",
  price: "number"
}

const ClosetItem: React.FC<clothInfo> = ({ clothesId, clothesImgUrl, detection, lastWashDate, price }) => {
  const navigation = useNavigation<Navigation>()
  const handleClothItemClick = () => {
    // ClothInfoScreen으로 이동하는 코드
    navigation.navigate('cloth', { clothesId }); // ClothInfoScreen으로 cloth의 id 전달
  };

  return (
    <TouchableOpacity onPress={handleClothItemClick}>
      <View style={styles.clothesItem}>
        <Text>{detection}</Text>
        <Image source={{ uri: clothesImgUrl }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clothesItem: {
    padding: 10,
    margin: 5,
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default ClosetItem;