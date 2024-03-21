import { Image, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../shared";

interface Props {
	clothesImageUrl: string;
	clothesId: number;
	onPress: (clothesId: Props["clothesId"]) => void;
}

const Card: React.FC<Props> = ({ clothesImageUrl, clothesId, onPress }) => {
	return (
		<Pressable
			style={styles.container}
			onPress={onPress.bind(this, clothesId)}
			testID={`test-${clothesId}`}
		>
			<Image style={styles.image} source={{ uri: clothesImageUrl }} />
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
		backgroundColor: COLORS.Gray,
	},
});
