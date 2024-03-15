// src/screens/closet/ClosetScreen.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text } from "react-native";
import axios from "axios";
import API from "../../shared/axios/axios"


interface IClothe {
  id: number;
  name: string;
  image: string;
}

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



// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text } from "react-native";
// import axios from "axios";

// interface IClothe {
//   id: number;
//   name: string;
//   image: string;
// }

// const ClosetScreen: React.FC = () => {
//   const [clothes, setClothes] = useState<IClothe[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedButton, setSelectedButton] = useState("closet");

//   useEffect(() => {
//     // 서버로부터 옷 목록 데이터를 가져오는 API 호출
//     const fetchData = async () => {
//       const response = await axios.get("/api/clothes");
//       setClothes(response.data);
//     };

//     fetchData();
//   }, []);
  
//   // 메인 페이지로 이동하는 코드
//   const handleBackButtonClick = () => {
//     navigation.navigate('home');
//   };

//   const handleClosetButtonClick = () => {
//     setSelectedButton("closet");
//   };

//   const handleCodyButtonClick = () => {
//     setSelectedButton("cody");
//   };

//   const renderClothes = () => {
//     return clothes.filter((cloth) => {
//       return cloth.name.toLowerCase().includes(searchQuery.toLowerCase());
//     }).map((cloth) => (
//       <ClotheItem key={cloth.id} cloth={cloth} />
//     ));
//   };

//   const renderRecommendedClothes = () => {
//     // 서버로부터 오늘의 추천 옷 목록을 가져오는 API 호출
//     const fetchData = async () => {
//       const response = await axios.get("/api/clothes/recommended");
//       // ...
//     };

//     fetchData();

//     return (
//       <View>
//         <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
//         <FlatList
//           data={recommendedClothes}
//           renderItem={({ item }) => <ClotheItem key={item.id} cloth={item} />}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBackButtonClick}>
//           <Text style={styles.backButtonText}>뒤로가기</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>내 옷장</Text>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="검색어를 입력하세요"
//           value={searchQuery}
//           onChangeText={(e) => setSearchQuery(e)}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={handleClosetButtonClick} style={[styles.button, selectedButton === "closet" && styles.selectedButton]}>
//           <Text style={styles.buttonText}>옷장</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleCodyButtonClick} style={[styles.button, selectedButton === "cody" && styles.selectedButton]}>
//           <Text style={styles.buttonText}>코디</Text>
//         </TouchableOpacity>
//       </View>
//       {selectedButton === "closet" && (
//         <ScrollView style={styles.content}>
//           {renderRecommendedClothes()}
//           {renderClothes()}
//         </ScrollView>
//       )}
//       {selectedButton === "cody" && (
//         // 코디 목록을 표시하는 코드
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     flex: 1,
//     textAlign: "center",
//   },
//   searchInput: {
//     width: 200,
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10