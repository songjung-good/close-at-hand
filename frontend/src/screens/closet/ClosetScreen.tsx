// src/screens/closet/ClosetScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Mock data for clothes
const clothesData1 = [
  { id: '1', name: 'Shirt 1' },
  { id: '2', name: 'Pants 1' },
  { id: '3', name: 'Dress 1' },
  // ... (add more items)
];

const clothesData2 = [
  { id: '4', name: 'Jacket 1' },
  { id: '5', name: 'Skirt 1' },
  // ... (add more items)
];

const ClosetScreen: React.FC = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  const toggleScreen = () => {
    setIsFirstScreen((prev) => !prev);
  };

  const renderClothesList = () => {
    return (
      <FlatList
        data={isFirstScreen ? clothesData1 : clothesData2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clothesItem}>
            <Text>{item.name}</Text>
          </View>
        )}
        numColumns={isFirstScreen ? 3 : 1}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text>검색</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle Buttons */}
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          style={[styles.toggleButton, isFirstScreen && styles.activeButton]}
          onPress={() => isFirstScreen || toggleScreen()}
        >
          <Text>1번 화면</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isFirstScreen && styles.activeButton]}
          onPress={() => !isFirstScreen || toggleScreen()}
        >
          <Text>2번 화면</Text>
        </TouchableOpacity>
      </View>

      {/* Clothes List */}
      {renderClothesList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerButton: {
    width: '20%',
    alignItems: 'center',
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#8DB9F8',
  },
  clothesItem: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClosetScreen;
