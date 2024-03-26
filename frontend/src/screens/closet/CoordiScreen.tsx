import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity, Text } from "react-native";
import { FONTSIZE, COLORS } from "../../shared";
import { useNavigation } from "@react-navigation/native";

// 옷 아이템 컴포넌트
const ClothItem: React.FC<clothInfo> = ({ id, name, image }) => {
  const navigation = useNavigation<Navigation>();
  const handleClothItemClick = () => {
    // ClothInfoScreen으로 이동하는 코드
    navigation.navigate('cloth', { id }); // ClothInfoScreen으로 cloth의 id 전달
  };

  return (
    <TouchableOpacity onPress={handleClothItemClick}>
      <View style={styles.clothesItem}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

// 옷 인터페이스
interface clothInfo {
  id: number;
  name: string;
  image: string;
}

// 프리셋 정보 인터페이스
interface presetInfo {
  id: number;
  name: string;
  description: string;
  clothIds: number[];
}

const CoordiScreen: React.FC <RootScreenProp<"coordi">> = ({navigation}) => {
  const [presets, setPresets] = useState<presetInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // 서버로부터 프리셋 목록 데이터를 가져오는 API 호출
    // const fetchData = async () => {
    //   const response = await API.get("/presets");
    //   setPresets(response.data);
    // };

    // fetchData();
  }, []);

  const handleBackButtonClick = () => {
    // 메인 페이지로 이동하는 코드
    navigation.navigate('home'); // 예시로 'home'으로 이동하도록 설정
  };

  const handleSearchInputChange = (e: string) => {
    setSearchQuery(e);
  };

  const renderPresets = () => {
    return presets.filter((preset) => {
      return preset.name.toLowerCase().includes(searchQuery.toLowerCase());
    }).map((preset) => (
      <PresetItem key={preset.id} {...preset} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <Text style={styles.backButtonText}>뒤로가기 이미지</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChangeText={handleSearchInputChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddPresetItemClick} style={styles.button}>
          <Text style={styles.buttonText}>새로운 코디 만들기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.presetsList}>
        <FlatList
          data={presets}
          renderItem={({ item }) => <PresetItem key={item.id} {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  backButtonText: {
    fontSize: FONTSIZE.ExtraSmall,
    fontWeight: "bold",
    color: COLORS.Black,
  },
  searchInput: {
    width: 200,
    height: 40,
    borderColor: COLORS.Gray,
  },
  buttonContainer: {

  },
  button: {

  },
  buttonText: {

  },
  presetsList: {

  },
});