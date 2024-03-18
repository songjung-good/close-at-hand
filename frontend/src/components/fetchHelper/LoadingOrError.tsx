import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared";

interface Props {
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
}

const LoadingOrError: React.FC<Props> = ({ isLoading, isError, error }) => {
	return (
		<View style={styles.container}>
			{isLoading && <Text style={styles.text}>Loading...</Text>}
			{isError &&
				(error?.message ? (
					<Text style={styles.text}>{error.message}</Text>
				) : (
					<Text style={styles.text}>인터넷 연결을 확인하세요</Text>
				))}
		</View>
	);
};

export default LoadingOrError;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 9999,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: COLORS.White,
	},
	text: {
		justifyContent: "center",
		textAlign: "center",
		fontSize: FONTSIZE.Large,
	},
});
