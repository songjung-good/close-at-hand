import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ClothesFetchListResponse } from "../types";
import { COLORS } from "../../shared";

const ReactCordiCard: React.FC<ClothesFetchListResponse> = ({
	outfitId,
	outfitUrl,
}) => {
	const navigation = useNavigation<Navigation>();

	function handlePress(outfitId: number) {
		navigation.navigate("recentCoordyDetail", { outfitId });
	}

	return (
		<Pressable onPress={handlePress.bind(this, outfitId)}>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: outfitUrl }}
					testID={`card-${outfitId}`}
				/>
			</View>
		</Pressable>
	);
};

export default ReactCordiCard;

const styles = StyleSheet.create({
	container: {
		height: 210,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "cover",
		margin: 5,
		backgroundColor: COLORS.Gray,
	},
});
