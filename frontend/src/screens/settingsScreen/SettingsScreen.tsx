import { StyleSheet, Text, View } from "react-native";

import Img from "../../../assets/image/LogoDesign.svg";

import { COLORS, FONTSIZE } from "../../shared";
import { SettingsButton } from "../../components";

const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Close at Hand</Text>
			<View style={styles.imageContainer}>
				<Img width={100} height={100} />
			</View>
			<View style={styles.buttonContainer}>
				<SettingsButton name="bluetooth" title="클로젯 핸드 연결하기" />
				<SettingsButton name="alram" title="알람 설정" />
				<SettingsButton name="profile" title="회원 정보" />
			</View>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		color: COLORS.PupleBlue,
		textAlign: "center",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		marginTop: 50,
		backgroundColor: COLORS.PaleBlue,
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: 20,
	},
});
