import { API } from "../../shared";
import { setGenericPassword } from "react-native-keychain";

interface FetchLogin {
	accountId: string;
	password: string;
}

export async function fetchLogin({ accountId, password }: FetchLogin) {
	return API.post("login", {
		accountId,
		password,
	})
		.then(async ({ data }) => {
			await setGenericPassword("refreshToken", data.token);
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("로그인 실패");
		});
}
