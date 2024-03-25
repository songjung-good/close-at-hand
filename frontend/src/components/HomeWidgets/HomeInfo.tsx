import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared";

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
const Bascket = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, { fontSize: FONTSIZE.Large }]}>{50}%</Text>
			<Image
				style={[styles.image, styles.center]}
				source={require("../../../assets/image/laundry-basket-full.png")}
			/>
			<Title title="빨래 바구니" />
		</View>
	);
};

const Closet = () => {
	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Image
					style={styles.image}
					source={require("../../../assets/image/tshirt.png")}
				/>
				<Text style={styles.text}>{"(옷 개수)"}개</Text>
			</View>
			<View style={styles.line} />
			<View style={styles.rowContainer}>
				<Image
					style={styles.image}
					source={require("../../../assets/image/pant.png")}
				/>
				<Text style={styles.text}>{"(옷 개수)"}개</Text>
			</View>
			<Title title="옷장" />
		</View>
	);
};

const HomeInfo = () => {
	return (
		<View style={styles.outercontainer}>
			<Bascket />
			<Closet />
		</View>
	);
};

export default HomeInfo;

const styles = StyleSheet.create({
	outercontainer: {
		marginTop: 15,
		flexDirection: "row",
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
		flexDirection: "row",
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
