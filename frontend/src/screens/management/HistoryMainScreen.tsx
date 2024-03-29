import {
	Pressable,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ClothesHistoryList, MostClothes } from "../../components/";
import { FONTSIZE, ROW } from "../../shared";
import { useState } from "react";

const HistoryMainScreen = () => {
	const navigation = useNavigation<Navigation>();
	const [refreshing, setRefreshing] = useState(false);

	function handleRecentPress() {
		navigation.navigate("recentCoordyList");
	}

	function onRefresh() {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<View style={[ROW, styles.titleContainer]}>
				<Text style={styles.text}>최근 코디</Text>
				<Pressable onPress={handleRecentPress}>
					<Ionicons name="albums-sharp" size={FONTSIZE.Medium} color="black" />
				</Pressable>
			</View>
			<ClothesHistoryList refreshing={refreshing} />
			<View style={[ROW, styles.titleContainer]}>
				<Text style={styles.text}>이번 달 가장 많이 입은 옷</Text>
			</View>
			<MostClothes refreshing={refreshing} />
		</ScrollView>
	);
};

export default HistoryMainScreen;

const styles = StyleSheet.create({
	titleContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 15,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		fontWeight: "bold",
	},
});
