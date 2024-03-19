import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
	title: string;
	moveTo: string;
	onPress: (title: string) => void;
}

/**
 * 세탁 관련 버튼을 나타내는 컴포넌트
 *
 * @param title 버튼에 표시될 텍스트
 * @param moveTo 이동할 스크린 이름, onPress의 인자가 됩니다.
 * @param onPress 버튼 클릭 시 스크린 이동
 */
const LaudryButton: React.FC<Props> = ({ title, moveTo, onPress }) => {
	return (
		<Pressable onPress={onPress.bind(this, moveTo)}>
			<View>
				<Text style={styles.overlayText}>{title}</Text>
				<Image
					style={styles.image}
					source={require("../../../assets/image/bubble2.png")}
					testID="image"
				/>
			</View>
		</Pressable>
	);
};

export default LaudryButton;

const styles = StyleSheet.create({
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
});
