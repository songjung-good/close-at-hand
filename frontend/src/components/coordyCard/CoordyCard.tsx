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
	ootdId,
	ootdImgUrl,
	noOnPress,
	widthMathToScreen,
}) => {
	const navigation = useNavigation<Navigation>();

	function handlePress(ootdId: number) {
		if (noOnPress) return;
		navigation.navigate("recentCoordyDetail", { ootdId });
	}

	return (
		<Pressable onPress={handlePress.bind(this, ootdId)}>
			<View testID={`card-${ootdId}`} style={styles.container}>
				<Image
					style={[styles.image, widthMathToScreen && { width: windowWidth }]}
					source={{ uri: ootdImgUrl }}
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
		borderWidth: 0.8,
		borderColor: COLORS.Gray,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "contain",
		backgroundColor: COLORS.LightGray,
	},
});
