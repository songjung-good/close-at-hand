import { useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

import { BorderBottomInput, StyledButton } from "../buttons";
import { fetchLogin } from "./API";

const SignIn = () => {
	const navigation = useNavigation<Navigation>();
	const [accountId, setAccountId] = useState("");
	const [password, setPassword] = useState("");

	const { mutate } = useMutation({
		mutationFn: fetchLogin,
		onSuccess: () => {
			navigation.navigate("0");
		},
		onError: () => {
			Alert.alert("로그인 실패", "아이디 또는 비밀번호를 다시 확인해주세요");
			setAccountId("");
			setPassword("");
		},
	});

	function hanldeLogin() {
		if (!accountId || !password) {
			Alert.alert("입력 오류", "아이디 또는 비밀번호를 입력하세요");
			return;
		}
		mutate({ accountId, password });
	}

	function handleIdChange(input: string) {
		setAccountId(input.toLowerCase());
	}

	return (
		<>
			<BorderBottomInput
				onChangeText={handleIdChange}
				value={accountId}
				placeholder="아이디"
			/>
			<BorderBottomInput
				onChangeText={setPassword}
				value={password}
				placeholder="비밀번호"
			/>
			<StyledButton title="로그인" onPress={hanldeLogin} />
		</>
	);
};

export default SignIn;
