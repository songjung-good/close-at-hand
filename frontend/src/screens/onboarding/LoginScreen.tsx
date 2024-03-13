import { StyleSheet, View } from "react-native";
import { SignUp, SignIn } from "../../components";
import { useState } from "react";
import { TextButton } from "../../shared";

const LoginScreen = () => {
	const [signUpTry, setSignUpTry] = useState(false);

	function hanldePress() {
		setSignUpTry((prev) => !prev);
	}

	return (
		<View style={styles.container}>
			{signUpTry ? (
				<SignUp setSignUpTry={setSignUpTry} data-testID="sign-up" />
			) : (
				<SignIn data-testID="sign-in" />
			)}
			<TextButton
				text={
					signUpTry ? "이미 회원이신가요?" : "아직 회원가입을 하지 않으셨나요?"
				}
				onPress={hanldePress}
			/>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
