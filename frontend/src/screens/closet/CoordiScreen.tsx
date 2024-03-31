import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// 컴포넌트 불러오기
import { COLORS, FONTSIZE } from '../../shared/';
import { PresetItem, NewPreset, ClosetItem } from '../../components';
// API
import { AxiosError } from 'axios';
import { API } from '../../shared/';

interface PresetItem {
  presetId: number;
  presetImgUrl: string;
  presetName: string;
  clothes: {
    clothesId: number;
    clothesImgUrl: string;
    lastWashDate: string;
    texture: string[];
    category: string[];
    item: string[];
    colors: string[];
    looks: string[];
    prints: string[];
  }[];
}

interface ClosetItem {
  clothesId: number;
  clothesImgUrl: string;
}

const CoordiScreen: React.FC = () => {
  const [presets, setPresets] = useState<PresetItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    // 서버로부터 프리셋 목록 데이터를 가져오는 API 호출
    const fetchPresetData = async () => {
      try {
        const response = await API.get("/preset");
        setPresets(response.data.data);
      } catch (error) {
        console.error("에러메시지:", error as AxiosError);
      }
    };
    fetchPresetData();
  }, []);

  const RenderPresetList: React.FC = () => {
    return (
      <FlatList
        data={presets.flatMap(preset => preset.clothes)}
        renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
        keyExtractor={(item) => item.clothesId.toString()}
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
