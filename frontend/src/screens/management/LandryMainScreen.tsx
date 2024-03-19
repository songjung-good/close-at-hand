import { Image, StyleSheet, View } from "react-native";
import { LaudryButton } from "../../components";

const LandryMainScreen: React.FC<RootNavigaionProp> = ({ navigation }) => {
	function handleButtonPress(basket: string) {
		navigation.navigate("laundaryBasket", { basket });
	}
	return (
		<View>
			<View style={styles.row}>
				<Image
					style={styles.image}
					source={require("../../../assets/image/foam.png")}
				/>
				<LaudryButton
					title="일반 세탁"
					bubble1={true}
					onPress={handleButtonPress}
				/>
			</View>
			<View style={styles.row}>
				<LaudryButton
					title="울 / 캐시미어"
					bubble1={true}
					onPress={handleButtonPress}
				/>
				<LaudryButton
					title="기능성 소재"
					bubble1={false}
					onPress={handleButtonPress}
				/>
			</View>
			<Image
				style={styles.laudaryBasket}
				source={require("../../../assets/image/laundry_Bascket.png")}
			/>
		</View>
	);
};

export default LandryMainScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 10,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		marginTop: "45%",
		zIndex: 999,
	},
	image: {
		height: 170,
		width: 170,
		resizeMode: "contain",
	},
	laudaryBasket: {
		alignSelf: "center",
	},
});
