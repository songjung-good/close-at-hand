import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../app";
import { Bluetooth } from "../../components";

const BluetoothConnection: React.FC<RootNavigaionProp> = ({ navigation }) => {
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
			<Bluetooth />
		</View>
	);
};

export default BluetoothConnection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		color: COLORS.Turquoise,
		fontSize: 32,
		marginVertical: 4,
	},
	imageContainer: {
		alignItems: "center",
		marginVertical: 10,
	},
	text: {
		fontSize: 16,
		marginVertical: 5,
	},
	textCenter: {
		textAlign: "center",
	},
});
