import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constant/COLORS";

const colorMatch = {
	SkyBlue: COLORS.Black,
	CarrotRed: COLORS.White,
	Black: COLORS.White,
	White: COLORS.Black,
};

interface Props {
	title: string;
	onPress: () => void;
	backgroundColor?: keyof typeof colorMatch;
}

const StyledButton: React.FC<Props> = ({ title, onPress, backgroundColor }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.pressed,
					{ backgroundColor: COLORS[backgroundColor ?? "SkyBlue"] },
				]}
				onPress={onPress}
				testID="button"
			>
				<Text
					style={[
						styles.text,
						{ color: colorMatch[backgroundColor ?? "SkyBlue"] },
					]}
				>
					{title}
				</Text>
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
		borderRadius: 5,
		borderWidth: 1,
		minHeight: 45,
		margin: 10,
		padding: 10,
	},
	pressed: {
		opacity: 0.75,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
		width: "auto",
	},
});
