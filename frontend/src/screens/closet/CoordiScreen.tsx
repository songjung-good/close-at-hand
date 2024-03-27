import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTSIZE } from '../../shared/';
import { PresetItem } from '../../components';
// 임시데이터
import { presetList } from './presetInfo';

// 임시 데이터
interface presetInfo {
  presetId: number,
  presetName: string,
  clothes: string[],
}

const CoordiScreen: React.FC = () => {
  const [preset, setPreset] = useState<presetInfo[]>(presetList);
  const navigation = useNavigation<Navigation>();

  const handleCreatePreset = () => {
    // 새로운 프리셋을 만들 수 있는 기능 추가
  };

  const RenderPresetList: React.FC = () => {
    return (
      <FlatList
        data={presetList}
        keyExtractor={(item) => item.presetId.toString()}
        renderItem={({ item }) => {
          return (
            <PresetItem
              preset={item}
              onPress={() => {
                // 프리셋을 누르면 해당 프리셋의 옷 목록을 보여줄 수 있는 기능 추가
              }}
            />
          );
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프리셋 목록</Text>
        <TouchableOpacity onPress={handleCreatePreset} style={styles.addButton}>
          <Text style={styles.buttonText}>새로 만들기</Text>
        </TouchableOpacity>
      </View>
      <View>
        <RenderPresetList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: COLORS.CarrotRed,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.ExtraSmall,
    fontWeight: 'bold',
  },
  presetContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: '20%',
    marginTop: '5%',
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default CoordiScreen;
