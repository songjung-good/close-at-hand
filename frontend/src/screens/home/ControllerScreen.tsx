// src/screens/home/ControllerScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { Bluetooth, PermissionStatus, requestBluetoothPermission } from 'expo-bluetooth';

const ControllerScreen: React.FC = () => {
  // const [bluetoothState, setBluetoothState] = useState<PermissionStatus | null>(null);

  // useEffect(() => {
  //   // 컴포넌트가 마운트되면 블루투스 상태를 확인
  //   checkBluetoothState();

  //   // 언마운트 시에 정리(clean-up) 함수 호출
  //   return () => {
  //     // 필요하다면 정리(clean-up) 작업 수행
  //   };
  // }, []);

  // const checkBluetoothState = async () => {
  //   // 블루투스 권한을 요청
  //   const permissionStatus = await requestBluetoothPermission();
    
  //   // 블루투스 상태를 가져옴
  //   const bluetoothStatus = await Bluetooth.getStatusAsync();
    
  //   setBluetoothState(bluetoothStatus);
  // };

  // const handleButtonPress = async (deviceFunction: string) => {
  //   // 블루투스 상태 확인
  //   if (bluetoothState?.isConnected) {
  //     // 블루투스가 연결된 상태이면 요청 보내기
  //     console.log(`Clicked button to control ${deviceFunction}`);
  //     // 여기서 블루투스 기기에 대한 요청을 보내는 로직을 추가하세요.
  //   } else {
  //     console.log('블루투스가 연결되어 있지 않습니다.');
  //   }
  // };
  
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
