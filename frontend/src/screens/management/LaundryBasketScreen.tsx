import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";

const LaundryBasket: React.FC<RootScreenProp<"laundaryBasket">> = ({
	navigation,
	route,
}) => {
	useEffect(() => {
		navigation.setOptions({ headerTitle: route.params.basket });
		console.log(route.params);
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.overlayText}>{route.params.basket}</Text>
			<Image source={require("../../../assets/image/bubble.png")} />
			<View style={styles.imageContainer}></View>
		</View>
	);
};

export default LaundryBasket;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 30,
	},

	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		marginTop: "8%",
		zIndex: 999,

		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	imageContainer: {
		justifyContent: "space-around",
	},
});
