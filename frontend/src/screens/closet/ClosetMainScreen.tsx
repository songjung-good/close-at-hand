import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native"

import { FONTSIZE, COLORS } from "../../shared";
// import API from "../../shared/axios/axios";

import ClosetScreen from "./ClosetScreen";
import CoordiScreen from "./CoordiScreen";

const ClosetMainScreen: React.FC <RootScreenProp<"closet">> = () => {
  // 최초화면은 옷장으로 설정
  const [selectedButton, setSelectedButton] = useState("closet");

    // 옷장화면 랜더링
    const handleClosetButtonClick = () => {
      setSelectedButton("closet");
    };
    // 코디화면 랜더링
    const handleCoordiButtonClick = () => {
      setSelectedButton("coordi");
    };

  return (
    <>
      <View style={styles.container}>    
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleClosetButtonClick} style={[styles.button, selectedButton === "closet" && styles.selectedButton]}>
            <Text style={styles.buttonText}>옷장</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCoordiButtonClick} style={[styles.button, selectedButton === "coordi" && styles.selectedButton]}>
            <Text style={styles.buttonText}>코디</Text>
          </TouchableOpacity>
        </View>
        <View>
          {selectedButton === "closet" && (
            <ClosetScreen />
          )}
          {selectedButton === "coordi" && (
            <CoordiScreen />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    marginTop: 2,
  },
  button: {
    padding: 10,
    width: 100,
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: FONTSIZE.ExtraSmall,
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: COLORS.CarrotRed,
  },
});

export default ClosetMainScreen;
