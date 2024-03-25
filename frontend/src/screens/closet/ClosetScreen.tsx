import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Text,
} from "react-native";
import axios from "axios";
import { ROW } from "../../shared";

// 옷 아이템 컴포넌트
const ClotheItem: React.FC<{ cloth: IClothe }> = ({ cloth }) => {
	return (
		<View style={styles.clothesItem}>
			<Text>{cloth.name}</Text>
		</View>
	);
};

// 옷 인터페이스
interface IClothe {
	id: number;
	name: string;
	image: string;
}

const ClosetScreen: React.FC<RootNavigationProp> = ({ navigation }) => {
	const [clothes, setClothes] = useState<IClothe[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedButton, setSelectedButton] = useState("closet");
	const [recommendedClothes, setRecommendedClothes] = useState<IClothe[]>([]);

	useEffect(() => {
		// 서버로부터 옷 목록 데이터를 가져오는 API 호출
		//   const fetchData = async () => {
		//     const response = await axios.get("/api/clothes");
		//     setClothes(response.data);
		//   };

		//   fetchData();
		// }, []);
		// 임시 데이터
		const tempClothesData: IClothe[] = [
			{ id: 1, name: "티셔츠", image: "url" },
			{ id: 2, name: "바지", image: "url" },
			{ id: 3, name: "원피스", image: "url" },
		];
		setClothes(tempClothesData);

		// 임시 데이터
		const tempRecommendedClothesData: IClothe[] = [
			{ id: 4, name: "재킷", image: "url" },
			{ id: 5, name: "스커트", image: "url" },
		];
		setRecommendedClothes(tempRecommendedClothesData);
	}, []);

	const handleBackButtonClick = () => {
		// 메인 페이지로 이동하는 코드
		navigation.navigate("home"); // 예시로 'home'으로 이동하도록 설정
	};

	const handleClosetButtonClick = () => {
		setSelectedButton("closet");
	};

	const handleCodyButtonClick = () => {
		setSelectedButton("cody");
	};

	const renderClothes = () => {
		return clothes
			.filter((cloth) => {
				return cloth.name.toLowerCase().includes(searchQuery.toLowerCase());
			})
			.map((cloth) => <ClotheItem key={cloth.id} cloth={cloth} />);
	};

	const renderRecommendedClothes = () => {
		// 서버로부터 오늘의 추천 옷 목록을 가져오는 API 호출
		// const fetchData = async () => {
		//   const response = await axios.get("/api/clothes/recommended");
		//   setRecommendedClothes(response.data);
		// };
		// fetchData();

		return (
			<View>
				<Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
				<FlatList
					data={recommendedClothes}
					renderItem={({ item }) => <ClotheItem key={item.id} cloth={item} />}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={[ROW, styles.header]}>
				<TouchableOpacity onPress={handleBackButtonClick}>
					<Text style={styles.backButtonText}>$ 내 옷장</Text>
				</TouchableOpacity>
				<TextInput
					style={styles.searchInput}
					placeholder="검색어를 입력하세요"
					value={searchQuery}
					onChangeText={(e) => setSearchQuery(e)}
				/>
			</View>
			<View style={[ROW, styles.buttonContainer]}>
				<TouchableOpacity
					onPress={handleClosetButtonClick}
					style={[
						styles.button,
						selectedButton === "closet" && styles.selectedButton,
					]}
				>
					<Text style={styles.buttonText}>옷장</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleCodyButtonClick}
					style={[
						styles.button,
						selectedButton === "cody" && styles.selectedButton,
					]}
				>
					<Text style={styles.buttonText}>코디</Text>
				</TouchableOpacity>
			</View>
			{selectedButton === "closet" && (
				<ScrollView style={styles.content}>
					{renderRecommendedClothes()}
					{renderClothes()}
				</ScrollView>
			)}
			{selectedButton === "cody" && (
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
		justifyContent: "space-between",
		padding: 10,
	},
	backButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
	},
	searchInput: {
		width: 200,
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
	},
	buttonContainer: {
		justifyContent: "space-between",
		padding: 10,
	},
	button: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: "#ccc",
	},
	buttonText: {
		color: "#000",
		fontSize: 16,
	},
	selectedButton: {
		backgroundColor: "#8DB9F8",
	},
	content: {
		flex: 1,
		padding: 10,
	},
	recommendedTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	clothesItem: {
		flex: 1,
		padding: 10,
		margin: 5,
		backgroundColor: "#e0e0e0",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default ClosetScreen;
