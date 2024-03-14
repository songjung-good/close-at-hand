import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../app/constant/COLORS";

interface Props {
	children: ReactNode;
}

export const ErrorText: React.FC<Props> = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: COLORS.CarrotRed,
		textAlign: "center",
	},
});
