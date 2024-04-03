import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
// 컴포넌트 불러오기
import { FONTSIZE, COLORS } from "../../shared";

interface presetItem {
  presetId: number;
  presetName: string;
  clothes: Clothes[];
}

interface Clothes {
  clothesId: number;
  clothesImgUrl: string;
  lastWashDate: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

const PresetList: React.FC<{ clothes: Clothes[] }> = ({ clothes }) => {
  return (
    <ScrollView horizontal>
      {clothes.map((clothesItem, index) => (
        <Image key={index} source={{ uri: clothesItem.clothesImgUrl }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const PresetItem: React.FC<presetItem> = ({ presetId, presetName, clothes }) => {
  const navigation = useNavigation<NavigationProp<Record<string, object>>>();
  const handlePresetNavigation = () => {
    navigation.navigate('preset', { id: presetId });
  };

  return (
    <View style={styles.presetContainer}>
      <Text style={styles.presetName}>{presetName}</Text>
      <TouchableOpacity onPress={handlePresetNavigation}>
        <PresetList clothes={clothes} />
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 35,
    marginRight: 10, // 사진 간 간격 조절
  },
  presetName: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "left",
  },
  presetContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    width: '90%',
  },
  presetItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default PresetItem;