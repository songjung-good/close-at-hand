import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared";

interface ButtonProps {
	title: string;
}

const ButtonBlock: React.FC<ButtonProps> = ({ title }) => {
	return (
		<View style={styles.button}>
			<Text style={styles.buttonFont}>{title}</Text>
		</View>
	);
};

const Overlay = () => {
	return (
		<View style={[styles.container, styles.overlay]}>
			<View style={styles.buttonGroup}>
				<ButtonBlock title={"클로젯 핸드\n레이아웃 변경"} />
				<ButtonBlock title="AR 코디하기" />
			</View>
			<View style={styles.buttonGroup}>
				<ButtonBlock title={"클로젯핸드로\n스타일 등록하기"} />
			</View>
		</View>
	);
};

const MirrorConnection = () => {
	const [mode, setMode] = useState(false);

	function HanldePress() {
		setMode((prev) => !prev);
	}

	console.log(mode);
	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={HanldePress}
				hitSlop={mode ? 1080 : 0}
				style={styles.container}
			>
				<View style={styles.innerContainer}>
					<Image source={require("../../../assets/image/mirror.png")} />
					<View style={styles.textContainer}>
						<Text>Close-At-Hand가 연결되었어요!</Text>
						<Image source={require("../../../assets/image/touchMessage.png")} />
					</View>
				</View>
				{mode && <Overlay />}
			</Pressable>
		</View>
	);
};

export default MirrorConnection;

const styles = StyleSheet.create({
	outerContainer: {
		marginTop: 10,
	},
	container: {
		backgroundColor: COLORS.LightGray,
		width: "100%",
		borderRadius: 10,
		overflow: "hidden",
		zIndex: 999,
	},
	innerContainer: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	textContainer: {
		justifyContent: "space-around",
	},
	overlay: {
		backgroundColor: COLORS.Black,
		position: "absolute",
		opacity: 0.7,
		flexDirection: "column",
		justifyContent: "space-around",
		height: "100%",
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		flex: 1,
		margin: 3,
		backgroundColor: COLORS.Gray,
		borderWidth: 1,
		borderRadius: 30,
		padding: 20,
		justifyContent: "center",
	},
	buttonFont: {
		fontSize: FONTSIZE.Small,
		alignSelf: "center",
		textAlign: "center",
	},
});
