import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { LaundryButton } from "../../components";
import { CENTER, COLORS, FONTSIZE, ROW } from "../../shared";
import { DoLaundry } from "../../components";

import form from "../../../assets/image/foam.png";
import basket from "../../../assets/image/laundry_Basket.png";

const LandryMainScreen: React.FC<RootScreenProp<"laundryMain">> = ({
	navigation,
	route,
}) => {
	const [modalVisible, setModalVisible] = useState(
		route.params?.fromNoti ?? false,
	);

	useEffect(() => {
		const { fromNoti } = route.params;

		setModalVisible(fromNoti);
	}, [route.params]);

	function putLaundry() {
		navigation.navigate("laundryMain", {
			fromNoti: true,
		});
	}

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
				<Image style={styles.image} source={form} />
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
			<Pressable onPress={putLaundry} style={[CENTER]}>
				<View
					style={[styles.overlayText, styles.laundryButtonContainer, CENTER]}
				>
					<Text style={[styles.overlayText, styles.laundryButtonText, CENTER]}>
						{"오늘 입은 옷 넣기"}
					</Text>
				</View>
				<Image style={styles.laundryBasket} source={basket} />
			</Pressable>
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
	laundryBasket: {
		alignSelf: "center",
	},
	laundryButtonText: {
		fontSize: FONTSIZE.ExtarLarge,
		backgroundColor: COLORS.CarrotRedRipple,
	},
	laundryButtonContainer: {
		opacity: 0.8,
		borderRadius: 10,
	},
});
