import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTSIZE } from "../../shared";
import { ROW } from "../../shared";
import { countLaundries } from "./API";

import full from "../../../assets/image/laundry-basket-full.png";
import empty from "../../../assets/image/laundry-basket-empty.png";
import tshirts from "../../../assets/image/tshirt.png";
import pant from "../../../assets/image/pant.png";

interface TitleProps {
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

type MoveTo = "laundryMain" | "closet";

interface widget {
	onPress(moveTo: MoveTo): void;
}

const Basket: React.FC<widget> = ({ onPress }) => {
	const count = countLaundries();

	return (
		<Pressable
			style={styles.container}
			onPress={onPress.bind(null, "laundryMain")}
		>
			<Text style={[styles.text, { fontSize: FONTSIZE.Large }]}>{count}개</Text>
			<Image
				style={[styles.image, styles.center]}
				source={count > 10 ? full : empty}
			/>
			<Title title="빨래 바구니" />
		</Pressable>
	);
};

const Closet: React.FC<widget> = ({ onPress }) => {
	return (
		<Pressable style={styles.container} onPress={onPress.bind(null, "closet")}>
			<View style={[ROW, styles.rowContainer]}>
				<Image style={styles.image} source={tshirts} />
				<Text style={styles.text}>{"(옷 개수)"}개</Text>
			</View>
			<View style={styles.line} />
			<View style={[ROW, styles.rowContainer]}>
				<Image style={styles.image} source={pant} />
				<Text style={styles.text}>{"(옷 개수)"}개</Text>
			</View>
			<Title title="옷장" />
		</Pressable>
	);
};

const HomeInfo = () => {
	const navigation = useNavigation<Navigation>();

	function handleWidgetPress(title: MoveTo) {
		if (title === "closet") {
			navigation.navigate("1", { screen: title });
		} else {
			navigation.navigate("2", { screen: title, params: { fromNoti: false } });
		}
	}
	return (
		<View style={[ROW, styles.outerContainer]}>
			<Basket onPress={handleWidgetPress} />
			<Closet onPress={handleWidgetPress} />
		</View>
	);
};

export default HomeInfo;

const styles = StyleSheet.create({
	outerContainer: {
		marginTop: 15,
		width: "100%",
	},
	container: {
		borderRadius: 10,
		backgroundColor: COLORS.LightMint,
		flex: 1,
		marginHorizontal: 5,
		paddingVertical: 10,
		paddingHorizontal: 3,
	},
	rowContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: FONTSIZE.Medium,
		fontWeight: "bold",
		color: COLORS.Turquoise,
	},
	image: {
		resizeMode: "contain",
		marginVertical: 15,
	},
	center: {
		alignSelf: "center",
	},
	titleContainer: {
		position: "absolute",
		backgroundColor: COLORS.Mint,
		bottom: 0,
		right: 0,
		paddingHorizontal: 10,
		paddingVertical: 3,
		borderTopLeftRadius: 15,
	},
	title: {
		fontSize: FONTSIZE.Small,
		fontWeight: "bold",
		color: COLORS.White,
	},
	line: {
		borderTopWidth: 3,
		borderColor: COLORS.Mint,
		marginHorizontal: 5,
	},
});
