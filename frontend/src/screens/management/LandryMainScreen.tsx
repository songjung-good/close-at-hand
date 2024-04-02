import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import { LaundryButton } from "../../components";
import { ROW } from "../../shared";
import { DoLaundry } from "../../components";

const LandryMainScreen: React.FC<RootScreenProp<"laundryMain">> = ({
	navigation,
	route,
}) => {
	const [modalVisible, setModalVisible] = useState(
		route.params?.fromNoti ?? false,
	);

	console.log(modalVisible);

	function handleButtonPress(
		basket: "일반 세탁" | "울 / 캐시미어" | "기능성 소재",
	) {
		navigation.navigate("2", { screen: "laundryBasket", params: { basket } });
	}

	return (
		<View>
			<DoLaundry
				hideModal={setModalVisible.bind(null, false)}
				modalVisible={modalVisible}
			/>
			<View style={[ROW, styles.center]}>
				<Image
					style={styles.image}
					source={require("../../../assets/image/foam.png")}
				/>
				<LaundryButton
					title="일반 세탁"
					bubble1={true}
					onPress={handleButtonPress}
				/>
			</View>
			<View style={[ROW, styles.center]}>
				<LaundryButton
					title="울 / 캐시미어"
					bubble1={true}
					onPress={handleButtonPress}
				/>
				<LaundryButton
					title="기능성 소재"
					bubble1={false}
					onPress={handleButtonPress}
				/>
			</View>
			<Image
				style={styles.laudaryBasket}
				source={require("../../../assets/image/laundry_Basket.png")}
			/>
		</View>
	);
};

export default LandryMainScreen;

const styles = StyleSheet.create({
	center: {
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 10,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
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
