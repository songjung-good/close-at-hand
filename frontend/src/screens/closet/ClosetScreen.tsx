import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchModal from "../../components/closet/SearchModal";
import { FONTSIZE, COLORS } from "../../shared";
// import API from "../../shared/axios/axios";

// 옷 아이템 컴포넌트
const ClothItem: React.FC<clothInfo> = ({ id, name, image }) => {
  const navigation = useNavigation<Navigation>()
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

const ClosetScreen: React.FC <RootScreenProp<"closet">> = ({navigation}) => {
  const [clothes, setClothes] = useState<clothInfo[]>([]);  
  const [searchModalVisible, setSearchModalVisible] = useState(false); // 검색 모달의 가시성 상태를 관리합니다.
  const [selectedButton, setSelectedButton] = useState("closet");
  const [recommendedClothes, setRecommendedClothes] = useState<clothInfo[]>([]);

  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
  //   const fetchData = async () => {
  //     const response = API.get("/api/clothes");
  //     setClothes(response.data);
  //   };

  //   fetchData();
  // }, []);
    // 임시 데이터
    const tempClothesData: clothInfo[] = [
      { id: 1, name: "티셔츠", image: "url" },
      { id: 2, name: "바지", image: "url" },
      { id: 3, name: "원피스", image: "url" },
      { id: 4, name: "재킷", image: "url" },
      { id: 5, name: "스커트", image: "url" },
    ];
    setClothes(tempClothesData);

    // 임시 데이터
    const tempRecommendedClothesData: clothInfo[] = [
      { id: 4, name: "재킷", image: "url" },
      { id: 5, name: "스커트", image: "url" },
    ];
    setRecommendedClothes(tempRecommendedClothesData);
  }, []);

    // 검색 버튼을 눌렀을 때 검색 모달을 열도록 합니다.
    const handleSearchButtonClick = () => {
      setSearchModalVisible(true);
    };

  const handleClosetButtonClick = () => {
    setSelectedButton("closet");
  };

  const handleCodyButtonClick = () => {
    setSelectedButton("coordi");
  };

  const RenderClothes = () => {
    return clothes.filter((cloth) => {
      // return cloth.name.toLowerCase().includes(searchQuery.toLowerCase());
    }).map((cloth) => (
      <View style={styles.clothesItem}>
        <ClothItem key={cloth.id} {...cloth} />
      </View>
    ));
  };

  const RenderRecommendedClothes = () => {
    return (
      <View>
        <View>
          <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
          <View style={styles.header}>
              {/* 검색 버튼 */}
            <TouchableOpacity onPress={handleSearchButtonClick}>
              <SearchModal visible={searchModalVisible} onClose={() => setSearchModalVisible(false)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.clothesItemContainner}>
          <FlatList
            numColumns={3}
            data={recommendedClothes}
            renderItem={({ item }) => <ClothItem key={item.id} {...item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.recommendedDiv}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>    
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClosetButtonClick} style={[styles.button, selectedButton === "closet" && styles.selectedButton]}>
          <Text style={styles.buttonText}>옷장</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCodyButtonClick} style={[styles.button, selectedButton === "coordi" && styles.selectedButton]}>
          <Text style={styles.buttonText}>코디</Text>
        </TouchableOpacity>
      </View>
      {selectedButton === "closet" && (
        <View>
          <View>
            <RenderRecommendedClothes />
          </View>
          <View>
            {/* <FlatList
              data={clothes}
              renderItem={({ item }) => <ClothItem key={item.id} cloth={item} />}
              keyExtractor={(item) => item.id.toString()}
            /> */}
            <RenderClothes />
          </View>
        </View>
        )}
      {selectedButton === "coordi" && (
        // 코디 목록을 표시하는 코드
        <Text>코디 목록</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end", // 검색 버튼을 오른쪽으로 정렬합니다.
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
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  button: {
    padding: 10,
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: FONTSIZE.ExtraSmall,
  },
  selectedButton: {
    backgroundColor: COLORS.CarrotRed,
  },
  searchButtonText: {
    fontSize: FONTSIZE.Medium,
    color: COLORS.CarrotRed,
  },
  recommendedTitle: {
    fontSize: FONTSIZE.Small,
    fontWeight: "bold",
    marginBottom: 10,
  },
  clothesItem: {
    padding: 10,
    margin: 5,
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  recommendedDiv: {
    borderColor: COLORS.CarrotRed,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    // flexWrap: 'wrap',
  },
});

export default ClosetScreen;
