// src/screens/home/ControllerScreen.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ControllerScreen: React.FC = () => {
  const handleButtonPress = (deviceFunction: string) => {
    // 여기서 버튼 클릭에 대한 로직을 작성하면 됩니다.
    console.log(`Clicked button to control ${deviceFunction}`);
    // 실제 블루투스 기기를 컨트롤하는 로직을 추가하세요.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('camera')}
      >
        <Text style={styles.buttonText}>카메라 촬영</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('otherFunction1')}
      >
        <Text style={styles.buttonText}>기타 기능 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('otherFunction2')}
      >
        <Text style={styles.buttonText}>기타 기능 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // 검정 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff', // 흰색 버튼
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000', // 검정 글자
    fontSize: 18,
  },
});

export default ControllerScreen;
