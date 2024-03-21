import { API } from "../../shared";

interface NoResponse {}

interface TodayResponse {}

export async function fetchToday() {
	return API.get("주소")
		.then((response) => {
			if (response.status === 404) {
				return "기록된 오늘의 코디가 없어요! \n 오늘의 코디를 추가해 주세요.";
			}
			return response.data as TodayResponse;
		})
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
