import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../../shared/styles/STYLES";

interface Props {
	text: string;
	onPress: () => void;
}

const TextButton: React.FC<Props> = ({ text, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
			testID="button"
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

export default TextButton;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	pressed: {
		opacity: 0.75,
	},
	text: {
		color: COLORS.PupleBlue,
		backgroundColor: COLORS.White,
	},
});
