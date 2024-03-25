import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

// 옷 인터페이스
interface clothInfo {
  id: number;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  material: string;
}

const ClosetItem: React.FC<clothInfo> = ({ id, name, image }) => {
  const navigation = useNavigation<Navigation>()
  const handleClothItemClick = () => {
    // ClothInfoScreen으로 이동하는 코드
    navigation.navigate('cloth', { id }); // ClothInfoScreen으로 cloth의 id 전달
  };

  return (
    <TouchableOpacity onPress={handleClothItemClick}>
      <View style={styles.clothesItem}>
        <Text>{name}</Text>
        <Image source={{ uri: image }} />
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