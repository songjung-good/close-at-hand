import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";
import { LaundryBasket } from "../../components";

const LaundryBasketScreen: React.FC<RootScreenProp<"laundryBasket">> = ({
	navigation,
	route,
}) => {
	useEffect(() => {
		navigation.setOptions({ headerTitle: route.params.basket });
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.bubbleContainer}>
				<Text style={styles.overlayText}>{route.params.basket}</Text>
				<Image source={require("../../../assets/image/bubble.png")} />
				<View style={styles.imageContainer}></View>
			</View>
			<LaundryBasket />
		</View>
	);
};

export default LaundryBasketScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
	},
	bubbleContainer: {
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
