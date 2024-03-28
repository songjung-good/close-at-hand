import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";

interface Props {
	title: string;
	bubble1: boolean;
	onPress: (title: string) => void;
}

const LaundryButton: React.FC<Props> = ({ title, bubble1, onPress }) => {
	return (
		<Pressable onPress={onPress.bind(this, title)}>
			<View style={styles.container}>
				<Text style={styles.overlayText}>{title}</Text>
				<Image
					style={styles.image}
					source={
						bubble1
							? require("../../../assets/image/bubble.png")
							: require("../../../assets/image/bubble2.png")
					}
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
