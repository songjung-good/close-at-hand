import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";
// 컴포넌트 불러오기
import { SearchModal, ClosetItem } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// API
import { AxiosError } from "axios";
import { API } from "../../shared";
// 임시데이터
import { clothList, recommendedClothes } from "./clothInfo";

// 옷 인터페이스
interface clothInfo {
  clothesId: number,
  clothesImgUrl: string,
  detection: string,
  lastWashDate: string,
  price: number,
};

const ClosetScreen: React.FC = () => {
  // 임시데이터
  const [clothes, setClothes] = useState<clothInfo[]>(clothList);
  const [recommendClothes, setRecommendedClothes] = useState<clothInfo[]>(recommendedClothes);
  // const [clothes, setClothes] = useState<clothInfo[]>([]); // 옷 목록 데이터 상태 변경
  // const [recommendClothes, setRecommendedClothes] = useState<clothInfo[]>([]); // 추천 옷 데이터 상태 변경
  // 검색 모달과 태그
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
  //   const fetchData = async () => {
  //     try {
  //       const response = await API.get("/clothes");
  //       setClothes(response.data.data);
  //     } catch (error) {
  //       console.error("에러메시지:", error as AxiosError);
  //     }
  //   };
  //   fetchData();
  // }, []);
  }, []);

  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    console.log(tags)
    setSelectedTags(tags);
  };

  // 모달의 현재 상태
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // 추천 옷 리스트
  const RenderRecommendedClothes: React.FC = () => {
    return (
      <View style={styles.recommendedDiv}>
        <FlatList
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          data={recommendClothes}
          renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
          keyExtractor={(item) => item.clothesId.toString()}
        />
      </View>
    );
  };

  // 옷장화면 옷 리스트 구성
  const RenderClothes: React.FC = () => {
    const filteredClothes = clothes.filter((cloth) => {
      return selectedTags.every((tag) => {
        return (
          cloth.detection === tag ||
          cloth.clothesId === tag ||
          cloth.clothesImgUrl === tag ||
          cloth.lastWashDate === tag ||
          cloth.price === tag
        );
      });
    });
  
    return (
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        data={filteredClothes}
        renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
        keyExtractor={(item) => item.clothesId.toString()}
      />
    );
  };

  return (
    <View>
      <View style={styles.recommendlistDiv}>
        <View style={styles.header}>
          <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
            {/* 검색 버튼 */}
          <TouchableOpacity>
            <SearchModal
              onClose={toggleModal}
              onTagsSelected={handleSaveTags} 
            />
          </TouchableOpacity>
        </View>
            {/* 추천 옷 */}
        <RenderRecommendedClothes />
      </View>
            {/* 옷 리스트 */}
      <View style={styles.clotheslistDiv}>
        <Text style={styles.clothesTitle}>옷장</Text>
        <View style={styles.clothesDiv}>
          <RenderClothes />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  recommendedTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  clothesTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
  },
  recommendlistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  clotheslistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  clothesDiv:{
    marginLeft: '3%',
  },
  recommendedDiv: {
    borderColor: COLORS.CarrotRed,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  flatListContent: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
});

export default ClosetScreen;
