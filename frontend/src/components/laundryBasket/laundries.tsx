import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import { useObject } from "@realm/react";
import { LaundryDB } from "../../shared";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 3;

interface Props {
	clothesId: number;
	isSelected: boolean;
	onPress(clothesId: LaundryDB): void;
}

const Laundries: React.FC<Props> = ({ clothesId, onPress }) => {
	const laundry = useObject(LaundryDB, clothesId)!;
	return (
		<Pressable style={styles.container} onPress={() => onPress(laundry)}>
			<Image style={styles.img} source={{ uri: laundry.clothesImgUrl }} />
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
