import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput , StyleSheet, TouchableOpacity, Image } from 'react-native';
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
  const [presetName, setPresetName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
      setImageURL(result.uri); // imageURL 상태 업데이트
    }
  };

  const openModal = () => {
    setimageModalVisible(!imageModalVisible);
  };

  // 새로 받는 정보
  const [Preset, setPreset] = useState<PresetInfo[]>([]);

  const updatePreset = async () => {
    try {
      // 프리셋 업데이트를 위한 axios 요청
      const response = await API.put('/preset/name', {
        presetId: presetId,
        presetName: presetName,
        presetImg: imageURL,
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

  return (
    <View>
      <TouchableOpacity onPress={openModal} >
        <View style={styles.addButton}>
          <Text style={styles.buttonText}> 추가!  </Text> 
        </View>
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
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.uploadText}>사진을 업로드하세요</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          {/* 전송하는 버튼 */}
          <TouchableOpacity style={styles.sendButton} onPress={updatePreset}>
            <Text style={styles.sendButtonText}>전송</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View> 
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: COLORS.Turquoise,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  addButton: {
    borderColor: COLORS.Turquoise,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: 'white',
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
  uploadText: {
    color: COLORS.Turquoise,
    fontSize: FONTSIZE.Medium,
    marginTop: 20,
    margin: '10%',
  },
  sendButton: {
    backgroundColor: COLORS.Turquoise,
    margin: '10%',
    height: '5%',
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center", // 이 부분을 추가함
  },
  sendButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
})

export default AddImage;
