import { StyleSheet, View } from "react-native";
import { SignUp, SignIn, TextButton } from "../../components";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useToken } from "../../shared";

const LoginScreen = () => {
	const navigation = useNavigation<Navigation>();

	const [signUpTry, setSignUpTry] = useState(false);
	const token = useToken();

	useEffect(() => {
		if (token) {
			navigation.replace("home");
		}
	}, [token]);

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
