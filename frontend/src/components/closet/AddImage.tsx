import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput , StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES';
// axios
import { API } from "../../shared";

// 프리셋
interface PresetProps {
  onClose: () => void;
  presetId: number;
  setisUpdate: () => void;
};

interface PresetInfo {
  presetId: number;
  presetImgUrl: string;
  presetName: string;
}

const AddImage: React.FC<PresetProps> = ({ onClose, presetId, setisUpdate }) => {
  // 모달상태
  const [imageModalVisible, setimageModalVisible] = useState(false);
  const presetID = useState(presetId)
  const [presetName, setPresetName] = useState('');
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [image, setImage] = useState<string>('');
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('이 기기에는 카메라가 허가되지 않았어요');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result)
    if (!result.assets) {
      setImageURL(result.assets);
    }
  };

  const updatePreset = async () => {
    try {
      const formData = new FormData();
      formData.append('presetId', String(presetID)); // presetId를 문자열로 변환하여 FormData에 추가
      formData.append('presetName', presetName);
      // 사진 데이터 추가
      if (image) {
        formData.append('presetImg', {uri: image, name: 'image.jpg', type: 'image/jpeg' });
      }

      // 프리셋 업데이트를 위한 axios 요청
      const response = await API.put('/preset', formData, {
        headers: {
          "Content-Type": 'multipart/form-data; boundary="boundary"',
      },
      });
      if (response.data.result === 'SUCCESS') {
        console.log('프리셋이 성공적으로 업데이트되었습니다.');
      } else {
        console.error('프리셋 업데이트 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('프리셋 업데이트 중 오류가 발생했습니다:', error);
    }
  };

  const openModal = () => {
    setimageModalVisible(!imageModalVisible);
  };

  const handleSend = () => {
    updatePreset(); // 프리셋 업데이트 수행
    setimageModalVisible(false); // 모달 닫기
  };
  
  const handleBack = () => {
    setimageModalVisible(false); // 모달 닫기
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.absoluteButton}>
          <Text style={styles.buttonText}> 추가!  </Text> 
      </TouchableOpacity>
      <Modal
      animationType="none"
      transparent={true}
      visible={imageModalVisible}>
      <View style={styles.modalContainer}>
        {/* 제목을 입력하는 칸 */}
        <TextInput
          style={styles.inputText}
          placeholder="제목을 입력하세요"
          onChangeText={text => setPresetName(text)}
          value={presetName}
        />
        {/* 사진을 업로드하는 칸 */}
        <View style={styles.imgContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.uploadText}>여기를 눌러서 사진을 업로드하세요</Text>
          </TouchableOpacity>
        </View>
        {imageURL && <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />}
        {/* 전송하는 버튼 */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>전송</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.backButtonText}>뒤로가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteButton: {
    position: 'absolute',
    left: '25%',
    top: '5%',
    backgroundColor: COLORS.Turquoise,
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
  },
  buttonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Small,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.White,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    // alignItems: "center",
  },
  inputText: {
    height: '7%',
    margin: '10%',
    borderWidth: 1,
    borderColor: COLORS.Turquoise,
    marginTop: '10%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imgContainer: {
    height: '50%',
    margin: '10%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.Turquoise,
  },
  uploadText: {
    color: COLORS.Turquoise,
    fontSize: FONTSIZE.Medium,
    marginTop: 20,
    margin: '10%',
  },
  sendButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row', // 버튼을 가로로 배열합니다.
    justifyContent: 'space-around', // 버튼 사이에 공간을 일정하게 배치합니다.
    marginTop: 20, // 전송 버튼과 뒤로가기 버튼 사이의 간격 조정을 위한 마진 설정
  },
  sendButton: {
    backgroundColor: COLORS.Turquoise,
    width: '35%',
    height: '35%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: COLORS.CarrotRedRipple,
    width: '35%',
    height: '35%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Medium,
  },
})

export default AddImage;
