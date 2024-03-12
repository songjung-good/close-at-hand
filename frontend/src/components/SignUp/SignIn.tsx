import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { BorderBottomInput } from "../../shared";
import { StyledButton } from "../../shared";

const SignUp = () => {
	const [userId, setUserId] = useState("");
	const [userPw, setUserPw] = useState("");

	function hanldeLogin() {
		if (!userId || !userPw) {
			Alert.alert("입력 오류", "아이디 또는 비밀번호를 입력하세요");
			return;
		}
		console.log("Id:", userId);
		console.log("pw:", userPw);
	}

	return (
		<View style={styles.container}>
			<BorderBottomInput
				setValue={setUserId}
				value={userId}
				placeholder="아이디"
			/>
			<BorderBottomInput
				setValue={setUserPw}
				value={userPw}
				placeholder="비밀번호"
			/>
			<StyledButton title="로그인" onPress={hanldeLogin} />
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
	},
});
