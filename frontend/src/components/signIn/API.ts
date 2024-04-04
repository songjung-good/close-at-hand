import { API, useUser } from "../../shared";
import * as Keychain from "react-native-keychain";

interface FetchLoginInterface {
	account: string;
	password: string;
}

export async function fetchLogin({ account, password }: FetchLoginInterface) {
	const formData = new FormData();
	formData.append("account", account);
	formData.append("password", password);

	return API.post("login", formData, {
		headers: {
			"Content-Type": 'multipart/form-data; boundary="boundary"',
		},
	})
		.then(async ({ headers }) => {
			if (headers.authorization) {
				const token = headers.authorization;
				useUser.setState((state) => ({
					...state,
					accessToken: token,
				}));
				await Keychain.setInternetCredentials(
					"closeAtHand",
					"closeAtHand",
					token,
				);
				console.log("저장");
			}
			console.log("응답, 토큰", headers.authorization);
		})
		.catch((reject) => {
			console.log("로그인 실패", reject.message);
			throw new Error("로그인 실패");
		});
}
