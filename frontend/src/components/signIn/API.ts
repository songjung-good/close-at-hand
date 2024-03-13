import { API } from "../../shared";
import { setGenericPassword } from "react-native-keychain";
import EncryptedStorage from "react-native-encrypted-storage";

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

			await EncryptedStorage.setItem("token", data.token);
			await EncryptedStorage.setItem(
				"refreshTokenExpiredAt",
				formattedDateTime,
			);
			await setGenericPassword("refreshToken", data.token);
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("로그인 실패");
		});
}
