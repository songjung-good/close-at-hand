import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// 컴포넌트 불러오기
import { COLORS, FONTSIZE } from '../../shared/';
import { PresetItem, NewPreset } from '../../components';
// 임시데이터
import { presetList } from './presetInfo';

interface presetItem {
  presetId: number,
  presetName: string,
  clothes: string[],
}

const CoordiScreen: React.FC = () => {
  const [preset, setPreset] = useState<presetItem[]>(presetList);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }


  const RenderPresetList: React.FC = () => {
    return (
      <FlatList
        data={presetList}
        renderItem={({ item }) => <PresetItem key={item.presetId} {...item} />}
        keyExtractor={(item) => item.presetId.toString()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프리셋 목록</Text>
        <TouchableOpacity>
          {/* <Text style={styles.buttonText}>새로 만들기</Text> */}
          <NewPreset 
            onClose={toggleModal}
          />
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
