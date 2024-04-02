import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";
import bublePicture1 from "../../../assets/image/bubble.png";
import bublePicture2 from "../../../assets/image/bubble.png";

interface Props {
	title: "일반 세탁" | "울 / 캐시미어" | "기능성 소재";
	bubble1: boolean;
	onPress: (title: Props["title"]) => void;
}

const LaundryButton: React.FC<Props> = ({ title, bubble1, onPress }) => {
	return (
		<Pressable onPress={onPress.bind(this, title)}>
			<View style={styles.container}>
				<Text style={styles.overlayText}>{title}</Text>
				<Image
					style={styles.image}
					source={bubble1 ? bublePicture1 : bublePicture2}
					testID="image"
				/>
			</View>
		</Pressable>
	);
};

export default LaundryButton;

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginVertical: 10,
		height: 170,
		width: 170,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		marginTop: "35%",
		zIndex: 999,

		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	image: {
		height: 170,
		width: 170,
		resizeMode: "contain",
	},
});
