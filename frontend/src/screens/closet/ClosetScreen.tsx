import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";

import { SearchModal } from "../../components";
import { ClosetItem } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// 임시데이터
import { clothList, recommendedClothes } from "./clothInfo";
// import API from "../../shared/axios/axios";

// 옷 인터페이스
interface clothInfo {
  clothesId: number,
  clothesImgUrl: string,
  detection: string,
  lastWashDate: string,
  price: number,
};

const ClosetScreen: React.FC = () => {
  const [clothes, setClothes] = useState<clothInfo[]>(clothList);
  const [recommendClothes, setRecommendedClothes] = useState<clothInfo[]>(recommendedClothes);
  // 검색 모달과 태그
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  
  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
    // const fetchData = async () => {
    //   const response = API.get("/clothes/{clothes.id}");
    //   setClothes(response.data);
    // };

    // fetchData();
  // }, []);
  }, []);

  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    setSelectedTags(tags);
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
      <View>
        <FlatList
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          data={filteredClothes}
          renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
          keyExtractor={(item) => item.clothesId.toString()}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.listDiv}>
        <View style={styles.header}>
          <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
            {/* 검색 버튼 */}
          <TouchableOpacity>
            <SearchModal onTagsSelected={handleSaveTags} />
          </TouchableOpacity>
        </View>
        <RenderRecommendedClothes />
      </View>
      <View style={styles.listDiv}>
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
    alignItems: "center", // 검색 버��을 중��으로 정��합니다.
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
  listDiv: {
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
