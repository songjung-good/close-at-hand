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
  clothesId: "number",
  clothesImgUrl: "string",
  detection: "string",
  lastWashDate: "string",
  price: "number"
}

const ClosetScreen: React.FC <RootScreenProp<"closet">> = ({navigation}) => {
  const [clothes, setClothes] = useState<clothInfo[]>(clothList);  
  const [searchModalVisible, setSearchModalVisible] = useState(false); // 검색 모달의 가시성 상태를 관리합니다.

  const [recommendClothes, setRecommendedClothes] = useState<clothInfo[]>(recommendedClothes);
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

  // 검색 버튼을 눌렀을 때 검색 모달을 열도록 합니다.
  const handleSearchButtonClick = () => {
    setSearchModalVisible(true);
  };

  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    setSelectedTags(tags);
  };

  // 옷장화면 옷 리스트 구성
  const RenderClothes = () => {
    const filteredClothes = clothes.filter((cloth) => {
      // 선택된 태그를 가지고 있는 옷만 필터링합니다.
      return selectedTags.some((tag) => cloth.includes(tag));
    });

    return filteredClothes.map((cloth) => (
      <View style={styles.clothesItem} key={cloth.clothesId}>
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
            style={styles.clothDiv}
            numColumns={3}
            data={recommendClothes}
            renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
            keyExtractor={(item) => item.clothesId}
          />
        </View>
      </View>
    );
  };

  return (
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
  );
};

const styles = StyleSheet.create({
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
