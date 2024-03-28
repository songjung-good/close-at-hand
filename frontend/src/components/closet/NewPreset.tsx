import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { clothList } from '../../screens/closet/clothInfo'; // 옷 정보 불러오기

const NewPreset: React.FC<{ route: any }> = ({ route }) => {
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
        <Button title="등록" onPress={() => { /* 선택된 옷 리스트를 프리셋으로 저장하는 로직 추가 */ }} />
      </View>
    </View>
  );
};

export default NewPreset;
