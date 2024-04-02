import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { CoordyDetail } from "./types";
import { COLORS, FONTSIZE } from "../../shared";

const DetailUI: React.FC<CoordyDetail> = ({ clothes, ootdImgUrl }) => {
	// const originalDate = new Date(date);
	// const dateString = `${originalDate.getFullYear()}년 ${originalDate.getMonth() + 1}월 ${originalDate.getDate()}일`;

	return (
		<View style={styles.container}>
			{/* <Text>{dateString}</Text> */}
			<Image
				source={{ uri: ootdImgUrl }}
				style={styles.image}
				testID="detail-image"
			/>
			<View style={styles.horizontalLine} />
			<Text style={styles.title}>입었던 옷</Text>
			<FlatList
				data={clothes}
				renderItem={({ item }) => (
					<View>
						<Image source={{ uri: item.clothesImgUrl }} style={styles.image} />
					</View>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
				numColumns={2}
			></FlatList>
		</View>
	);
};

export default DetailUI;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "cover",
		backgroundColor: COLORS.Gray,
		margin: 5,
	},
	text: {
		fontSize: FONTSIZE.Medium,
	},
	title: {
		fontSize: FONTSIZE.Large,
	},
	horizontalLine: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		width: "100%",
		margin: 10,
	},
});
