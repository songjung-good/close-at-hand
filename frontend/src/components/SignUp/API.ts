import { AxiosError } from "axios";
import { API } from "../../shared";

interface FetchSignUpInterface {
	account: string;
	password: string;
	userName: string;
}

export async function fetchSignUp({
	account,
	password,
	userName,
}: FetchSignUpInterface) {
	return API.post("user", { account, password, userName })
		.then(() => {
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("회원가입 실패");
		});
}

export async function fetchIdCheck(id: string) {
	try {
		const response = await API.get(`login/${id}`);
		return response.data.data as "Already exist" | "Available";
	} catch (error) {
		return new Error((error as AxiosError).message);
	}
}
