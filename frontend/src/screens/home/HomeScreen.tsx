import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen: React.FC <RootScreenProp<"home">> = ({navigation}) => {
  const handleControllerScreenNavigation = () => {
    navigation.navigate("controller"); // 해당 부분 수정
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>홈 화면</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleControllerScreenNavigation}
      >
        <Text style={styles.buttonText}>컨트롤러 화면으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8DB9F8',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;