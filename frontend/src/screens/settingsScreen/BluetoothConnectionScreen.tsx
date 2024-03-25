import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared";

const BluetoothConnectionScreen: React.FC<RootNavigationProp> = ({
	navigation,
}) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.title, styles.textCenter]}>
				주변의 기기를 검색 중입니다.
			</Text>
			<View style={styles.imageContainer}>
				<Image
					source={require("../../../assets/image/bluetoothSearching.png")}
				></Image>
			</View>
			<Text style={[styles.text, styles.textCenter]}>
				스마트 미러를 켜주시고 연결될 때까지 잠시 기다려 주세요
			</Text>
		</View>
	);
};

export default BluetoothConnectionScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		color: COLORS.Turquoise,
		fontSize: FONTSIZE.ExtarLarge,
		marginVertical: 4,
	},
	imageContainer: {
		alignItems: "center",
		marginVertical: 10,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
		marginVertical: 5,
	},
	textCenter: {
		textAlign: "center",
	},
});
