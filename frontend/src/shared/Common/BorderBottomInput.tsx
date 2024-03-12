import { StyleSheet, TextInput } from "react-native";
import COLORS from "../constant/COLORS";

interface Props {
	value: string;
	setValue: (text: string) => void;
	placeholder?: string;
}

const BorderBottomInput: React.FC<Props> = ({
	value,
	setValue,
	placeholder,
}) => {
	function handleChange(text: string) {
		setValue(text);
	}

	return (
		<TextInput
			style={styles.input}
			value={value}
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
