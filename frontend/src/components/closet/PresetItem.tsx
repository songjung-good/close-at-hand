import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

// 옷 인터페이스
interface presetInfo {
  id:	number,
  presetImgUrl:	string,
  presetName:	string,
  clothes: string,
}

const PresetItem: React.FC<presetInfo> = ({ id }) => {
  const navigation = useNavigation<Navigation>()
  const handlePresetNavigation = () => {
    navigation.navigate('preset', { id });
  };

  return (
    <TouchableOpacity onPress={handlePresetNavigation}>
      <View style={styles.presetContainer}>
        <Text>preset Item</Text>
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
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // marginLeft: '5%',
    // width: '30%',
  },
  presetContainer: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
});

export default PresetItem;