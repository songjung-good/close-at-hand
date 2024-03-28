import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

interface presetItem {
  presetId: number,
  presetName: string,
  clothes: string[],
};

const PresetList: React.FC<presetItem> = ({ presetId, presetName, clothes }) => {
  return (
    // <View style={styles.imageContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {clothes.map((clothesUrl, index) => (
        <Image key={index} source={{ uri: clothesUrl }} style={styles.image} />
      ))}
    </ScrollView>
  );
};


const PresetItem: React.FC<presetItem> = ({ presetId, presetName, clothes }) => {
  const navigation = useNavigation<Navigation>();
  const handlePresetNavigation = () => {
    navigation.navigate('preset', { id: presetId });
  };
  const presetList = [{presetId, presetName, clothes}];

  return (
    <TouchableOpacity onPress={handlePresetNavigation}>
      <View style={styles.presetContainer}>
        <Text style={styles.presetName}>{presetName}</Text>
        <FlatList 
          contentContainerStyle={styles.presetItem}
          data={presetList}
          renderItem={({item}) => <PresetList key={item.presetId} {...item} />}
          keyExtractor={(item) => item.presetId.toString()}
        />
      </View>
    </TouchableOpacity>
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