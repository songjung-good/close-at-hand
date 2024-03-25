import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import { Clothes } from "../types";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 3;

interface Props extends Clothes {
	isSelected: boolean;
	onPress(clothesId: number): void;
}

const Laundries: React.FC<Props> = ({
	clothesId,
	clothesImgUrl,
	isSelected,
	onPress,
}) => {
	return (
		<Pressable style={styles.container} onPress={() => onPress(clothesId)}>
			<Image style={styles.img} source={{ uri: clothesImgUrl }} />
		</Pressable>
	);
};

export default Laundries;

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
	},
	img: {
		resizeMode: "contain",
		width: itemWidth,
		aspectRatio: 1,
	},
});
