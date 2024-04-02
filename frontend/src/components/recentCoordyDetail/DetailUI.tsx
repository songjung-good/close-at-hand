import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

import { CoordyDetail } from "./types";
import { COLORS, FONTSIZE } from "../../shared";
import { useNavigation } from "@react-navigation/native";

const DetailUI: React.FC<CoordyDetail> = ({
	clothes,
	ootdImgUrl,
	createdAt,
}) => {
	const navigation = useNavigation<Navigation>();

	const originalDate = new Date(createdAt);
	const dateString = `${originalDate.getFullYear()}년 ${originalDate.getMonth() + 1}월 ${originalDate.getDate()}일`;

	function goToClothesDetail(clothesId: number) {
		navigation.navigate("1", { screen: "cloth", params: { id: clothesId } });
	}

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: ootdImgUrl }}
				style={styles.image}
				testID="detail-image"
			/>
			<Text style={styles.text}>{`${dateString}의 코디`}</Text>
			<View style={styles.horizontalLine} />
			<Text style={styles.title}>입었던 옷</Text>
			<FlatList
				style={styles.flatList}
				contentContainerStyle={{ flexGrow: 1 }}
				data={clothes}
				numColumns={2}
				renderItem={({ item }) => (
					<Pressable onPress={goToClothesDetail.bind(null, item.clothesId)}>
						<Image source={{ uri: item.clothesImgUrl }} style={styles.image} />
					</Pressable>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
			></FlatList>
		</View>
	);
};

export default DetailUI;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "contain",
		borderWidth: 1,
		borderColor: COLORS.Gray,
		borderRadius: 10,
		margin: 5,
	},
	text: {
		fontSize: FONTSIZE.Medium,
		fontWeight: "400",
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	horizontalLine: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		width: "70%",
		margin: 10,
	},
	flatList: {
		// padding: 10,
	},
});
