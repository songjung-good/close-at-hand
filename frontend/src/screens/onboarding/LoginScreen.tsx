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
			{signUpTry ? <SignUp /> : <SignIn />}
			<TextButton
				text="아직 회원가입을 하지 않으셨나요?"
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
