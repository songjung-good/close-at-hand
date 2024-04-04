import { StyleSheet } from "react-native";
import { COLORS } from "./STYLES";

const styles = StyleSheet.create({
	shadow: {
		backgroundColor: COLORS.White,

		elevation: 5,

		shadowColor: COLORS.Black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.75,
		shadowRadius: 5,
	},

	row: {
		flexDirection: "row",
		justifyContent: "center",
	},

	center: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
});

export const SHADOW = styles.shadow;
export const ROW = styles.row;
export const CENTER = styles.center;
