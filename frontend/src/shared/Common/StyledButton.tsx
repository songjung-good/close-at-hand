import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constant/COLORS";

interface Props {
	title: string;
	onPress: () => void;
}

const StyledButton: React.FC<Props> = ({ onPress, title }) => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={onPress} testID="button">
				<Text style={styles.text}>{title}</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	button: {
		backgroundColor: COLORS.SkyBlue,
		borderColor: COLORS.White,
		borderRadius: 5,
		borderWidth: 1,
		minHeight: 45,
		margin: 10,
		padding: 10,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
		width: "auto",
	},
});
