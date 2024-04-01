import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// 컴포넌트 불러오기
import { COLORS, FONTSIZE } from '../../shared/';
import { PresetItem, NewPreset } from '../../components';
// API
import { AxiosError } from 'axios';
import { API } from '../../shared/';

interface presetItem {
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
  const [presets, setPresets] = useState<presetItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<Navigation>();

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프리셋 목록</Text>
      </View>
      <FlatList
        data={presets}
        renderItem={({ item }) => <PresetItem presetId={item.presetId} presetName={item.presetName} clothes={item.clothes} />} // 수정된 부분
        keyExtractor={(item) => item.presetId.toString()}
      />
      <TouchableOpacity>
        <NewPreset 
          onClose={toggleModal}
        />
      </TouchableOpacity>
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
