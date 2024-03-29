import React, { useState } from 'react';
import { Modal, View, Text, Button, Pressable, StyleSheet } from 'react-native';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES'
// 임시데이터
import { clothList } from '../../screens/closet/clothInfo'; 

interface NewPresetProps {
  onClose: () => void;
};

const NewPreset: React.FC<NewPresetProps> = ({ onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClothes, setSelectedClothes] = useState([]); // 선택된 옷 목록
  
  // const onPressItem = (cloth) => {
  //   const isSelected = selectedClothes.some((selected) => selected.clothesId === cloth.clothesId);
  //   setSelectedClothes(isSelected ? selectedClothes.filter((c) => c.clothesId !== cloth.clothesId) : [...selectedClothes, cloth]);
  // };

  // constrenderItem = ({ item }) => {
  //   const isSelected = selectedClothes.some((selected) => selected.clothesId === item.clothesId);
  //   return (
  //     <TouchableOpacity onPress={() => onPressItem(item)}>
  //       <View style={{ borderWidth: isSelected ? 2 : 1, borderColor: isSelected ? 'blue' : 'black', padding: 10 }}>
  //         <Image source={{ uri: item.clothesImgUrl }} style={{ width: 100, height: 100 }} />
  //         <Text>{item.detection}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View>
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          {/* 카테고리 탭 (예시: 상의, 하의, 외투) 추가하기 */}
        </View>
        {/* <FlatList
          data={clothList}
          renderItem={renderItem}
          numColumns={3} // 3열 그리드 형태
          keyExtractor={(item) => item.clothesId.toString()} // 유니크 키 추출
        /> */}
        <View style={{ alignItems: 'center', margin: 10 }}>
          <Button 
            title="등록" 
            onPress={() => setModalVisible(!modalVisible)
            /* 선택된 옷 리스트를 프리셋으로 저장하는 로직 추가 */
            } />
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>🔍</Text>
    </Pressable>
  </View>
  );
};

const styles = StyleSheet.create({
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
})

export default NewPreset;
