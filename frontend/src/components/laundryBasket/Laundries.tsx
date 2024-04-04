import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { FONTSIZE, LaundryDB } from "../../shared";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 3;

interface Props {
	laundry: LaundryDB;
	isSelected: boolean;
	onPress(clothesId: number): void;
}

const Laundries: React.FC<Props> = ({ laundry, isSelected, onPress }) => {
	return (
		<Pressable
			style={styles.container}
			onPress={() => onPress(laundry.clothesId)}
		>
			<Image style={styles.img} source={{ uri: laundry.clothesImgUrl }} />
			<FontAwesome
				name={isSelected ? "check-circle-o" : "circle-o"}
				size={FONTSIZE.Medium}
			/>
		</Pressable>
	);
};

export default Laundries;

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		resizeMode: "contain",
		width: itemWidth,
		aspectRatio: 1,
	},
});
