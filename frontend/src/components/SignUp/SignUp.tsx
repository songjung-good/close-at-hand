import { StyleSheet } from "react-native";
import { BorderBottomInput, StyledButton } from "../../shared";
import { useReducer } from "react";

const initialState = {
	accountId: "",
	password: "",
	password2: "",
	nickname: "",
};

type Action =
	| { type: "SET_ACCOUNT_ID"; payload: string }
	| { type: "SET_PASSWORD"; payload: string }
	| { type: "SET_PASSWORD2"; payload: string }
	| { type: "SET_NICKNAME"; payload: string };

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

const SignUp = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	function handleAccountIdChange(input: string) {
		dispatch({ type: "SET_ACCOUNT_ID", payload: input });
	}

	function handlePasswordChange(input: string) {
		dispatch({ type: "SET_PASSWORD", payload: input });
	}

	function handlePassword2Change(input: string) {
		dispatch({ type: "SET_PASSWORD2", payload: input });
	}

	function handleNicknameChange(input: string) {
		dispatch({ type: "SET_NICKNAME", payload: input });
	}

	function hanldeSubmit() {}

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
				isPassword={true}
			/>
			<BorderBottomInput
				value={state.password2}
				onChangeText={handlePassword2Change}
				placeholder="비밀번호확인"
				isPassword={true}
			/>
			<BorderBottomInput
				value={state.nickname}
				onChangeText={handleNicknameChange}
				placeholder="닉네임"
			/>
			<StyledButton title="회원 가입" onPress={hanldeSubmit} />
		</>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
