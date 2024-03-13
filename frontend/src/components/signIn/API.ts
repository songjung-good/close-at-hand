import { API } from "../../shared";
import { setGenericPassword } from "react-native-keychain";
import * as SecureStore from "expo-secure-store";

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
			const today = new Date();
			// 한 달 뒤
			const oneMonthLater = new Date(
				today.getFullYear(),
				today.getMonth() + 1,
				today.getDate(),
			);

			// 한 시간 전
			const oneHourEarlier = new Date(oneMonthLater.getTime() - 1000 * 60 * 60); // 1000 = 1초, 60 = 1분
			const formattedDateTime =
				oneHourEarlier.toISOString().split("T")[0] +
				" " +
				oneHourEarlier.toTimeString().split(" ")[0];
			try {
				const a = SecureStore.setItemAsync("token", data.token);
				const b = SecureStore.setItemAsync("exp", formattedDateTime);
				const c = setGenericPassword("refreshToken", data.token);
				await Promise.allSettled([a, b, c]);
			} catch (error) {
				console.log(error);
			}
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("로그인 실패");
		});
}
