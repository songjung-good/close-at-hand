import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
// 컴포넌트 불러오기
import { SearchModal, ClosetItem } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// API
import { AxiosError } from "axios";
import { API } from "../../shared";

// 옷 인터페이스
interface ClothInfo {
  clothesId: number;
  clothesImgUrl: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

const ClosetScreen: React.FC = () => {
  // 임시데이터
  const [clothes, setClothes] = useState<ClothInfo[]>([]);
  const [recommendClothes, setRecommendedClothes] = useState<ClothInfo[][]>([]);
  // 검색 모달과 태그
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
    const fetchClothesData = async () => {
      try {
        const response = await API.get("/clothes");
        setClothes(response.data.data);
        // 모든 태그를 선택하여 초기화
        const allTags = response.data.data.map((cloth: any) => {
          // 옷의 모든 속성에서 태그만 추출하여 배열로 반환
          return [
            ...cloth.texture,
            ...cloth.category,
            ...cloth.item,
            ...cloth.colors,
            ...cloth.looks,
            ...cloth.prints,
          ];
        });
        
        // 중복 제거 후 선택된 태그로 설정
        const uniqueTags = Array.from(new Set(allTags.flat()));
        setSelectedTags(uniqueTags);
      } catch (error) {
        console.error("옷 데이터가 없어용 ㅠ:", error as AxiosError);
      }
    };
    fetchClothesData();
      
    // 서버로부터 추천 옷 데이터를 가져오는 API 호출
    const fetchRecommendData = async () => {
      try {
        const response = await API.get("/recommend");
        setRecommendedClothes(response.data.data.recommendList);
      } catch (error) {
        console.error("추천 옷 받아오는 거 어렵워용 ㅠㅠ:", error as AxiosError);
      }
    };
    fetchRecommendData();
  }, []);


  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    setSelectedTags(tags);
  };

  // 모달의 현재 상태
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // 추천 옷 리스트
  const RenderRecommendedClothes: React.FC = () => {
    return (
      <ScrollView horizontal style={styles.recommendedDiv}>
        {recommendClothes.flat().map((item) => (
          <ClosetItem key={item.clothesId} {...item} />
        ))}
      </ScrollView>
    );
  };

  // 옷장화면 옷 리스트 구성
  const RenderClothes: React.FC = () => {
    const filteredClothes = clothes.filter((cloth) => {
      // 선택된 태그와 옷의 속성을 비교하여 필터링합니다.
      return selectedTags.some((tag) => {
        // 각 옷의 속성을 가져옵니다.
        const { texture, category, item, colors, looks, prints } = cloth;
        // 선택된 태그와 옷의 속성을 비교하여 필터링합니다.
        return (
          texture.includes(tag) || 
          category.includes(tag) ||
          item.includes(tag) ||
          colors.includes(tag) ||
          looks.includes(tag) ||
          prints.includes(tag)
        );
      });
    });

        // 필터링된 옷이 없는 경우 알림창을 표시하는 로직 추가
    if (filteredClothes.length === 0 || selectedTags.length === 0) {
      return (
        <View>
          <Text style={styles.alertText}>선택된 옷이 없습니다. 다른 태그를 선택해주세요.</Text>
        </View>
      );
    };

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
        <RenderClothes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendlistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  alertText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    fontSize: FONTSIZE.Medium,
    color: COLORS.Blue,
  },
  recommendedTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  clotheslistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
    // flex: 1,
  },
  clothesTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
  },
  recommendedDiv: {
    borderColor: COLORS.CarrotRed,
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  flatListContent: {
    marginLeft: '5%',
    flexGrow: 1,
  },
});

export default ClosetScreen;
