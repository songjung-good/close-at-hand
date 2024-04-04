import { Image, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { MostClothes } from "./type";

interface Props extends MostClothes {
	onPress: (clothesId: Props["clothesId"]) => void;
}

const Card: React.FC<Props> = ({ clothesImgUrl, clothesId, onPress }) => {
	return (
		<Pressable
			style={styles.container}
			onPress={onPress.bind(this, clothesId)}
			testID={`test-${clothesId}`}
		>
			<Image style={styles.image} source={{ uri: clothesImgUrl }} />
		</Pressable>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		height: 240,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "cover",
		borderWidth: 0.8,
		borderColor: COLORS.Gray,
	},
});
