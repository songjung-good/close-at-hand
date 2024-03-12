import { StyleSheet, TextInput } from "react-native";
import COLORS from "../constant/COLORS";

interface Props {
	value: string;
	onChangeText: (text: string) => void;
	placeholder: string;
	isPassword?: boolean;
}

const BorderBottomInput: React.FC<Props> = ({
	value,
	onChangeText,
	placeholder,
	isPassword = false,
}) => {
	function handleChange(text: string) {
		onChangeText(text);
	}

	return (
		<TextInput
			style={styles.input}
			value={isPassword ? value.replace("//i", "*") : value}
			onChangeText={handleChange}
			placeholder={placeholder}
			testID="input"
		/>
	);
};

export default BorderBottomInput;

const styles = StyleSheet.create({
	input: {
		backgroundColor: COLORS.White,
		borderColor: COLORS.Black,
		borderBottomWidth: 1,

		fontSize: 16,
		textAlign: "left",

		height: 40,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10,
		width: "auto",
	},
});
