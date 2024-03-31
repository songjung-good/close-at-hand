import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

// 옷 인터페이스
interface ClothInfo {
  clothesId: number;
  clothesImgUrl: string;
}


const ClosetItem: React.FC<ClothInfo> = ({ clothesId, clothesImgUrl }) => {
  const navigation = useNavigation<Navigation>()
  const handleClothItemClick = () => {
    // ClothInfoScreen으로 이동하는 코드
    navigation.navigate('cloth', { id: clothesId }); // ClothInfoScreen으로 cloth의 id 전달
  };

  return (
    <TouchableOpacity onPress={handleClothItemClick}>
      <View style={styles.clothesItem}>
        <Image source={{ uri: clothesImgUrl }} style={{ width: 70, height: 70 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clothesText: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "center",
  },
  clothesItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});

export default ClosetItem;