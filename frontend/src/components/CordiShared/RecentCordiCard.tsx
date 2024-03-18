import { Image, Pressable, StyleSheet, View } from "react-native";
import { FetchListResponse } from "../clothesHistory/types";
import { useNavigation } from "@react-navigation/native";

const ReactCordiCard: React.FC<FetchListResponse> = ({
	outfitId,
	outfitUrl,
}) => {
	const navigation = useNavigation<Navigation>();
	function handlePress() {
		navigation.navigate("0");
	}
	return (
		<Pressable onPress={handlePress}>
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
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "cover",
		margin: 5,
	},
});
