import { Image, Pressable, StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ClothesFetchListResponse } from "../types";
import { COLORS } from "../../shared";

interface Props extends ClothesFetchListResponse {
	noOnPress?: boolean;
	widthMathToScreen?: boolean;
}

let windowWidth = Dimensions.get("window").width / 3 - 10;

const CordiCard: React.FC<Props> = ({
	outfitId,
	outfitUrl,
	noOnPress,
	widthMathToScreen,
}) => {
	const navigation = useNavigation<Navigation>();

	function handlePress(outfitId: number) {
		if (noOnPress) return;
		navigation.navigate("recentCoordyDetail", { outfitId });
	}

	return (
		<Pressable onPress={handlePress.bind(this, outfitId)}>
			<View testID={`card-${outfitId}`} style={styles.container}>
				<Image
					style={[styles.image, widthMathToScreen && { width: windowWidth }]}
					source={{ uri: outfitUrl }}
				/>
			</View>
		</Pressable>
	);
};

export default CordiCard;

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
