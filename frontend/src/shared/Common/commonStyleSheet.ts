import { StyleSheet } from "react-native";
import COLORS from "../../app/constant/COLORS";

const styles = StyleSheet.create({
	shadow: {
		backgroundColor: COLORS.White,
		shadowColor: COLORS.Black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.75,
		shadowRadius: 5,
	},
});

export const SHADOW = styles.shadow;
