import { Alert, StyleSheet } from "react-native";
import { BorderBottomInput, StyledButton } from "../../shared";
import { useReducer, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchSignUp } from "./API";
import { ErrorText } from "./UI";

const initialState = {
	accountId: "",
	password: "",
	password2: "",
	nickname: "",
	error: "",
};

type Action = {
	type: "SET_ACCOUNT_ID" | "SET_PASSWORD" | "SET_PASSWORD2" | "SET_NICKNAME";
	payload: string;
};

const reducer = (
	state: typeof initialState,
	action: Action,
): typeof initialState => {
	switch (action.type) {
		case "SET_ACCOUNT_ID":
			return { ...state, accountId: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		case "SET_PASSWORD2":
			return { ...state, password2: action.payload };
		case "SET_NICKNAME":
			return { ...state, nickname: action.payload };
		default:
			return state;
	}
};

interface Props {
	setSignUpTry: (isTry: boolean) => void;
}

const SignUp: React.FC<Props> = ({ setSignUpTry }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState("");
	const { mutate } = useMutation({
		mutationFn: fetchSignUp,
		onSuccess: () => {
			setSignUpTry(false);
		},
		onError: () => {
			Alert.alert(
				"회원 가입 실패",
				"회원 가입에 실패하였습니다. 인터넷 연결을 확인하여 주세요",
			);
		},
	});

	function handleAccountIdChange(input: string) {
		const lowerCase = input.toLowerCase();
		if (/^[a-z0-9]*$/.test(lowerCase)) {
			dispatch({ type: "SET_ACCOUNT_ID", payload: lowerCase });
			if (error === "아이디는 영어소문자와 숫자만 입력 가능합니다.") {
				setError("");
			}
		} else {
			setError("아이디는 영어소문자와 숫자만 입력 가능합니다.");
		}
	}

	function handlePasswordChange(input: string) {
		dispatch({ type: "SET_PASSWORD", payload: input });
		if (state.password2) {
			if (input !== state.password2) {
				setError("비밀번호가 일치하지 않습니다.");
			}
		} else if (error === "비밀번호가 일치하지 않습니다.") {
			setError("");
		}
	}

	function handlePassword2Change(input: string) {
		dispatch({ type: "SET_PASSWORD2", payload: input });
		if (input !== state.password) {
			setError("비밀번호가 일치하지 않습니다.");
		} else if (error === "비밀번호가 일치하지 않습니다.") {
			setError("");
		}
	}

	function handleNicknameChange(input: string) {
		if (/^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]*$/.test(input)) {
			dispatch({ type: "SET_NICKNAME", payload: input });
			if (
				error ===
				"닉네임은 한글, 영문 대문자, 영문 소문자 그리고 숫자만 입력가능합니다."
			) {
				setError("");
			}
		} else {
			setError(
				"닉네임은 한글, 영문 대문자, 영문 소문자 그리고 숫자만 입력가능합니다.",
			);
		}
	}

	function hanldeSubmit() {
		if (isValid(state, setError)) {
			mutate(state);
		}
	}

	return (
		<>
			<BorderBottomInput
				value={state.accountId}
				onChangeText={handleAccountIdChange}
				placeholder="아이디"
			/>
			<BorderBottomInput
				value={state.password}
				onChangeText={handlePasswordChange}
				placeholder="비밀번호"
				secureTextEntry={true}
			/>
			<BorderBottomInput
				value={state.password2}
				onChangeText={handlePassword2Change}
				placeholder="비밀번호확인"
				secureTextEntry={true}
			/>
			<BorderBottomInput
				value={state.nickname}
				onChangeText={handleNicknameChange}
				placeholder="닉네임"
			/>
			<ErrorText>{error}</ErrorText>
			<StyledButton title="회원 가입" onPress={hanldeSubmit} />
		</>
	);
};

export default SignUp;

const styles = StyleSheet.create({});

const isValid = (
	state: typeof initialState,
	errorDisplayer: (message: string) => void,
): boolean => {
	const { accountId, password, password2, nickname } = state;

	if (!accountId || !password || !password2 || !nickname) {
		errorDisplayer("빈 항목이 있습니다. 모든 항목을 입력하세요");
		return false;
	}

	if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
		errorDisplayer("비밀번호는 알파벳과 숫자가 최소 하나씩 포함되어야 합니다.");
		return false;
	}

	if (!/[a-zA-Z0-9@$!%*#?&]$/.test(password)) {
		errorDisplayer(
			"비밀번호는 영어 대문자, 소문자, 특수문자(@, $, !, %, *, #, ?, &)만 사용 가능합니다.",
		);
		return false;
	}

	// 비밀번호 길이 확인
	if (password.length < 5 || password.length > 20) {
		errorDisplayer("비밀번호는 5~20자 사이여야 합니다.");
		return false;
	}

	// 비밀번호 일치 여부 확인
	if (password !== password2) {
		errorDisplayer("비밀번호가 일치하지 않습니다.");
		return false;
	}

	// 계정 ID 길이 확인
	if (accountId.length < 5 || accountId.length > 20) {
		errorDisplayer("계정 ID는 5~20자 사이여야 합니다.");
		return false;
	}

	// 닉네임 길이 확인
	if (nickname.length > 10) {
		errorDisplayer("닉네임은 10자 이하여야 합니다.");
		return false;
	}

	return true;
};
