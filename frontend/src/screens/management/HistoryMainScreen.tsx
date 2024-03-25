import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ClothesHistoryList, MostClothes } from "../../components/";
import { FONTSIZE } from "../../shared";
import { useNavigation } from "@react-navigation/native";

const HistoryMainScreen = () => {
	const navigation = useNavigation<Navigation>();

	function handleRecentPress() {
		navigation.navigate("recentCoordyList");
	}

	return (
		<ScrollView>
			<View style={styles.titleContainer}>
				<Text style={styles.text}>최근 코디</Text>
				<Pressable onPress={handleRecentPress}>
					<Ionicons name="albums-sharp" size={FONTSIZE.Medium} color="black" />
				</Pressable>
			</View>
			<ClothesHistoryList />
			<View style={styles.titleContainer}>
				<Text style={styles.text}>이번 달 가장 많이 입은 옷</Text>
			</View>
			<MostClothes />
		</ScrollView>
	);
};

export default HistoryMainScreen;

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 15,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		fontWeight: "bold",
	},
});
