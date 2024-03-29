import React, { useState } from 'react';
import { Modal, View, Text, Button, Pressable, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES'

// 임시데이터
import { clothList } from '../../screens/closet/clothInfo';

// 프리셋
interface NewPresetProps {
  onClose: () => void;
};
// 옷 인터페이스
interface clothInfo {
  clothesId: number,
  clothesImgUrl: string,
  detection: string,
  lastWashDate: string,
  price: number,
};

const NewPreset: React.FC<NewPresetProps> = ({ onClose }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);
  // 전체 옷 리스트
  const [clothes, setClothes] = useState<clothInfo[]>(clothList);
  // 선택된 옷 목록
  const [selectedClothes, setSelectedClothes] = useState<clothInfo[]>([]);
  
  // 옷 리스트를 렌더링하는 함수
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
              <Text style={styles.clothesText} numberOfLines={1}>{item.detection}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.clothesId.toString()} // 각 항목에 고유한 키 제공
      />
    );
  };

  // 옷을 토글하는 함수
  const toggleCloth = (cloth: clothInfo) => {
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
      // 여기서 API 요청을 보내고 선택된 옷 목록을 프리셋으로 저장합니다.
      // 예를 들어, fetch 또는 axios를 사용하여 POST 요청을 보낼 수 있습니다.
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 필요한 경우 인증 토큰을 여기에 추가합니다.
        },
        body: JSON.stringify(selectedClothes),
      });
      if (response.ok) {
        console.log('프리셋이 성공적으로 저장되었습니다.');
      } else {
        console.error('프리셋 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
    }
  };

  // 모달을 열거나 닫는 함수
  const toggleModal = () => {
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
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            {/* 카테고리 탭 (예시: 상의, 하의, 외투) 추가하기 */}
          </View>
          {renderClothesList()}
          <View style={{ alignItems: 'center', margin: 10 }}>
            <Button 
              title="등록" 
              onPress={() => toggleModal()} />
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
