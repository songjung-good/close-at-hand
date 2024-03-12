import { API } from "../../shared";
import { setGenericPassword } from "react-native-keychain";

interface Props {
	accountId: string;
	password: string;
}

export async function fetchLogin({ accountId, password }: Props) {
	const response = await API.post("login", {
		accountId,
		password,
	});

	if (response.status == 201) {
		await setGenericPassword("refreshToken", response.data.token);
		return true;
	}
	console.log(response.data);
	throw new Error("로그인 실패");
}
