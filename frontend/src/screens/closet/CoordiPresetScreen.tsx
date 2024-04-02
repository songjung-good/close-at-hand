import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
// 컴포넌트
import { AddPreset } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// API
import { AxiosError } from 'axios';
import { API } from '../../shared/';

interface Clothes {
  clothesId: number;
  clothesImgUrl: string;
  lastWashDate: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

interface PresetInfo {
  presetId: number;
  presetImgUrl: string;
  presetName: string;
  clothes: Clothes[];
}

const CoordiPresetScreen: React.FC<{ route: any }> = ({ route }) => {
  const presetId = route.params.id;
  const [presetInfo, setPresetInfo] = useState<PresetInfo | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<Navigation>();
  const [isUpdate, setisUpdate] = useState(0);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    const fetchPresetInfo = async () => {
      try {
        const response = await API.get(`preset/${presetId}`);
        const data = response.data.data;
        setPresetInfo(data);
      } catch (error) {
        console.error("받아오는 데이터에 문제가 있네요ㅠ:", error);
      }
    };
    fetchPresetInfo();
  }, [presetId, isUpdate]);

  // 옷 상세정보
  const handleClothItemPress = (clothesId: number) => {
    navigation.navigate('cloth', { id: clothesId });
  };

  // 옷 삭제 
  const handleDeleteCloth = async (index: number) => {
    try {
      const updatedClothes = [...presetInfo!.clothes];
      updatedClothes.splice(index, 1);
      setPresetInfo(prevState => ({
        ...prevState!,
        clothes: updatedClothes,
      }));

      // 옷이 지워진 후 서버로 요청
      const clothesIdList = [presetInfo!.clothes[index].clothesId];
      const requestData = {
        presetId: presetInfo!.presetId,
        clothesIdList: clothesIdList,
      };

      const response = await API.put('/preset/pop', requestData)

      if (response.data.result === "SUCCESS") {
        console.log("서버에서 옷 삭제 요청이 성공적으로 처리되었습니다.");
      } else {
        console.error("서버에서 옷 삭제 요청 처리 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("서버에 옷 삭제 요청을 보내는 중 오류가 발생했습니다:", error);
    }
  };

  function update() {
    setisUpdate(prev => prev+1)
  }

  return (
    <>
      {presetInfo ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Button
              title='수정'
            />
            <Image source={{ uri: presetInfo.presetImgUrl }} style={styles.image} />
          </View>
          <ScrollView style={styles.infoContainer}>
            {presetInfo.clothes.map((clothes, index) => (
              <TouchableOpacity key={index} style={styles.infoItem} onPress={() => handleClothItemPress(clothes.clothesId)}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCloth(index)}>
                  <Text style={styles.deleteButtonText}>삭제</Text>
                </TouchableOpacity>
                <View style={styles.infoImageContainer}>
                  <Image style={styles.infoImg} source={{ uri: clothes.clothesImgUrl }} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoText}>텍스처: {clothes.texture.join(', ')}</Text>
                  <Text style={styles.infoText}>아이템: {clothes.item.join(', ')}</Text>
                  <Text style={styles.infoText}>색상: {clothes.colors.join(', ')}</Text>
                  <Text style={styles.infoText}>룩: {clothes.looks.join(', ')}</Text>
                  <Text style={styles.infoText}>프린트: {clothes.prints.join(', ')}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <AddPreset
              onClose={toggleModal} 
              presetId={presetId}
              setisUpdate={update}
              />
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>옷 정보를 가져오는 중입니다...</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  imageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.Black,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%", // 이미지 크기 조절
  },
  infoContainer: {
    flex: 2,
  },
  infoItem: {
    flexDirection: 'row', // 가로로 배치되도록 설정
    alignItems: "center",
    borderColor: COLORS.Mint,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: COLORS.CarrotRed,
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  deleteButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Small,
  },
  infoImageContainer: {
    flex: 1, // 왼쪽 1/3 공간을 차지하도록 설정
    marginRight: 10, // 이미지와 텍스트 사이의 간격 조절
  },
  infoImg: {
    width: '100%', // 이미지를 컨테이너의 가로 길이에 맞게 조정
    height: 120, // 이미지의 높이 설정 (원하는 크기로 변경 가능)
    borderRadius: 5, // 이미지에 테두리를 둥글게 만듭니다.
    resizeMode: 'contain', // 이미지를 원하는 크기로 조정
  },
  infoTextContainer: {
    flex: 2, // 오른쪽 2/3 공간을 차지하도록 설정
  },
  infoText: {
    fontSize: FONTSIZE.ExtraSmall, // 폰트 크기 조절
    color: COLORS.Black, // 폰트 색상 조절
    borderBottomWidth: 1, // border-bottom-line 추가
    borderBottomColor: COLORS.Gray, // border-bottom-line 색상 조절
    marginBottom: 5,
    marginLeft: 2,
  },
});

export default CoordiPresetScreen;
