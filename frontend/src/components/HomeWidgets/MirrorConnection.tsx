import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE, SHADOW } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import { ROW } from "../../shared";

interface ButtonProps {
	title: string;
	onPress(): void;
}

const ButtonBlock: React.FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<Pressable style={[SHADOW, styles.button]} onPress={onPress}>
			<Text style={styles.buttonFont}>{title}</Text>
		</Pressable>
	);
};

const Overlay = () => {
	const navigation = useNavigation<Navigation>();

	function handleChangeLayout() {
		navigation.navigate("0");
	}

	function handleCloseAtHandIoT(identifier: string) {
		// 블루투스로 명령보내는 거
	}

	return (
		<View style={[styles.container, styles.overlay]}>
			<View style={[ROW, styles.buttonGroup]}>
				<ButtonBlock
					title={"클로젯 핸드\n레이아웃 변경"}
					onPress={handleChangeLayout}
				/>
				<ButtonBlock
					title="AR 코디하기"
					onPress={handleCloseAtHandIoT.bind(this, "AR")}
				/>
			</View>
			<View style={[ROW, styles.buttonGroup]}>
				<ButtonBlock
					title={"클로젯핸드로\n스타일 등록하기"}
					onPress={handleCloseAtHandIoT.bind(this, "style")}
				/>
			</View>
		</View>
	);
};

const MirrorConnection = () => {
	const [mode, setMode] = useState(false);

	function HanldePress() {
		setMode((prev) => !prev);
	}

	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={HanldePress}
				hitSlop={mode ? 1080 : 0}
				style={styles.container}
			>
				<View style={[ROW, styles.innerContainer]}>
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
		justifyContent: "space-around",
		margin: 10,
	},
	button: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: COLORS.Gray,
		borderWidth: 1,
		borderRadius: 30,
		padding: 20,
		justifyContent: "center",
	},
	buttonFont: {
		fontSize: FONTSIZE.Small,
		textAlign: "center",
	},
});
