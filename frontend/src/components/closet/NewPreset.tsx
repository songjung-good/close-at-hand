import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, Pressable, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES'
// axios
import { API } from "../../shared";
import { AxiosError } from 'axios';

// 프리셋
interface NewPresetProps {
  onClose: () => void;
};
// 옷 인터페이스
interface ClothInfo {
  clothesId: number,
  clothesImgUrl: string,
};

const NewPreset: React.FC<NewPresetProps> = ({ onClose }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);
  // 전체 옷 리스트
  const [clothes, setClothes] = useState<ClothInfo[]>([]);
  // 선택된 옷 목록
  const [selectedClothes, setSelectedClothes] = useState<ClothInfo[]>([]);
  // 프리셋 이름
  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    // 옷 목록을 가져오는 axios 요청
    const fetchClothes = async () => {
      try {
        const response = await API.get('/clothes');
        setClothes(response.data.data);
      } catch (error) {
        console.error('옷 목록을 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchClothes();
  }, []);

  const renderClothesList = () => {
    return (
      <FlatList
        style={styles.flatList}
        numColumns={3}
        data={clothes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCloth(item)}>
            <View style={[styles.clothesItem, selectedClothes.find(cloth => cloth.clothesId === item.clothesId) && { backgroundColor: COLORS.LightGray }]}>
              <Image source={{ uri: item.clothesImgUrl }} style={{ width: 75, height: 75, borderRadius: 50 }} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.clothesId.toString()} 
      />
    );
  };

  // 옷을 토글하는 함수
  const toggleCloth = (cloth: ClothInfo) => {
    const index = selectedClothes.findIndex(item => item.clothesId === cloth.clothesId);
    if (index !== -1) {
      // 이미 선택된 옷이면 선택 해제
      const updatedClothes = selectedClothes.filter(item => item.clothesId !== cloth.clothesId);
      setSelectedClothes(updatedClothes);
    } else {
      // 선택되지 않은 옷이면 선택
      const updatedClothes = [...selectedClothes, cloth];
      setSelectedClothes(updatedClothes);
    }
  };

  const saveSelectedClothes = async () => {
    try {
      const clothesIdList = selectedClothes.map(cloth => cloth.clothesId);

      const formData = new FormData();
      formData.append('request', JSON.stringify({
        presetName: presetName, // presetName 추가
        clothesIdList: clothesIdList
      }));

      // 프리셋 등록을 위한 axios 요청
      const response = await API.post('/preset', formData, {
        headers: {
          "Content-Type": 'multipart/form-data; boundary="boundary"',
      },
      });
  
      if (response.data.result === 'SUCCESS') {
        console.log('프리셋이 성공적으로 저장되었습니다.');
      } else {
        console.error('프리셋 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('프리셋 저장 중 오류가 발생했습니다:', error);
    }
  };

  // 모달을 열거나 닫는 함수
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const sendData = () => {
    // 모달을 닫기 전에 선택된 옷을 저장합니다.
    saveSelectedClothes();
    setModalVisible(!modalVisible);
  };


  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>
            옷 목록
          </Text>
          <TextInput
            style={styles.input}
            placeholder="프리셋 이름 입력"
            onChangeText={(text) => setPresetName(text)}
            value={presetName}
          />
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            {/* 카테고리 탭 (예시: 상의, 하의, 외투) 추가하기 */}
          </View>
          {renderClothesList()}
          <View style={styles.buttonContainer}>
            <Button
              title="등록"
              onPress={() => sendData()}
              style={styles.button}
            />
            <Button
              title="취소"
              onPress={() => toggleModal()}
              style={styles.button}
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>➕</Text>
      </Pressable>
    </View> 
  );
};

const styles = StyleSheet.create({
  flatList:{
    paddingVertical: 20,
  },
  modalContainer:{
    backgroundColor: COLORS.White,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  titleText:{
    fontSize: FONTSIZE.Large,
    marginVertical: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  buttonText: {
    color: COLORS.CarrotRed,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  addButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    height: 100,
    width: '90%',
    borderBlockColor: COLORS.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  clothesText: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "center",
  },
  clothesItem: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 8,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '30%',
  },
})

export default NewPreset;
