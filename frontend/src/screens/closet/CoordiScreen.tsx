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
      </View>
      <View>
        <RenderPresetList />
        <TouchableOpacity>
          <NewPreset 
            onClose={toggleModal}
          />
        </TouchableOpacity>
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
});

export default CoordiScreen;
