import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";

import SearchModal from "../../components/closet/SearchModal";
import ClosetItem from "../../components/closet/ClosetItem";
import { FONTSIZE, COLORS } from "../../shared";
// 임시데이터
import { clothList, recommendedClothes } from "./clothInfo";
// import API from "../../shared/axios/axios";

// 옷 인터페이스
interface clothInfo {
  id: number;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  material: string;
}

const ClosetScreen: React.FC <RootScreenProp<"closet">> = ({navigation}) => {
  const [clothes, setClothes] = useState<clothInfo[]>(clothList);  
  const [searchModalVisible, setSearchModalVisible] = useState(false); // 검색 모달의 가시성 상태를 관리합니다.
  const [selectedButton, setSelectedButton] = useState("closet");
  const [recommendClothes, setRecommendedClothes] = useState<clothInfo[]>(recommendedClothes);
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  
  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
  //   const fetchData = async () => {
  //     const response = API.get("/api/clothes");
  //     setClothes(response.data);
  //   };

  //   fetchData();
  // }, []);
    // 임시 데이터
  }, []);

  // 검색 버튼을 눌렀을 때 검색 모달을 열도록 합니다.
  const handleSearchButtonClick = () => {
    setSearchModalVisible(true);
  };
  // 옷장화면 랜더링
  const handleClosetButtonClick = () => {
    setSelectedButton("closet");
  };
  // 코디화면 랜더링
  const handleCodyButtonClick = () => {
    setSelectedButton("coordi");
  };

  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    setSelectedTags(tags);
  };

  // 옷장화면 옷 리스트 구성
  const RenderClothes = () => {
    const filteredClothes = clothes.filter((cloth) => {
      // 선택된 태그를 가지고 있는 옷만 필터링합니다.
      return selectedTags.some((tag) => cloth.color.includes(tag));
    });

    return filteredClothes.map((cloth) => (
      <View style={styles.clothesItem} key={cloth.id}>
        <ClosetItem {...cloth} />
      </View>
    ));
  };
  //   return clothes.map((cloth) => (
  //     <View style={styles.clothesItem} key={cloth.id}>
  //       <ClosetItem {...cloth} />
  //     </View>
  //   ));
  // };

  const RenderRecommendedClothes = () => {
    return (
      <View>
        <View style={styles.recommendedDiv}>
          <FlatList
            numColumns={3}
            data={recommendClothes}
            renderItem={({ item }) => <ClosetItem key={item.id} {...item} />}
            keyExtractor={(item) => item.id.toString()}
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
          <View style={styles.header}>
            <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
            <View>
                {/* 검색 버튼 */}
              <TouchableOpacity onPress={handleSearchButtonClick}>
                <SearchModal visible={searchModalVisible} onClose={() => setSearchModalVisible(false)} onSaveTags={handleSaveTags} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <RenderRecommendedClothes />
          </View>
          <View>
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
    justifyContent: "space-between", // 검색 버튼을 오른쪽으로 정렬합니다.
    padding: 10,
  },
  backButtonText: {
    fontSize: FONTSIZE.ExtraSmall,
    fontWeight: "bold",
    color: COLORS.Black,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
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
  searchButtonText: {
    fontSize: FONTSIZE.Medium,
    color: COLORS.CarrotRed,
  },
  recommendedTitle: {
    fontSize: FONTSIZE.Small,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
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
  },
});

export default ClosetScreen;
