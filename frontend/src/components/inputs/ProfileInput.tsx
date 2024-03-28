import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared/styles/STYLES";

interface Props {
	value: string;
	onChangeText?: (text: string) => void;
	secureTextEntry?: boolean;
}

const ProfileInput: React.FC<Props> = ({ value, onChangeText }) => {
	function handleChange(text: string) {
		onChangeText!(text);
	}

	return (
		<View>
			{onChangeText ? (
				<TextInput
					style={[styles.common, styles.input]}
					value={value}
					onChangeText={handleChange}
					testID="input"
				/>
			) : (
				<View style={[styles.common, styles.textContainer]}>
					<Text style={styles.text}>{value}</Text>
				</View>
			)}
		</View>
	);
};

export default ProfileInput;

const styles = StyleSheet.create({
	common: {
		borderRadius: 10,

		fontSize: FONTSIZE.ExtraSmall,
		textAlign: "left",

		height: 40,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10,
	},
	input: {
		backgroundColor: COLORS.White,
		borderColor: COLORS.Gray,
		borderWidth: 1,
	},
	textContainer: {
		justifyContent: "center",
		backgroundColor: COLORS.LightGray,
	},
	text: {
		paddingHorizontal: 10,
		textAlign: "center",
	},
});
