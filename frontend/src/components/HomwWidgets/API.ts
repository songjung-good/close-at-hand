import { AxiosError } from "axios";
import { API } from "../../shared";

interface FetchTodayInterface {
	signal: AbortSignal;
}

interface NoResponse {
	message: string;
	noResponse: true;
}

interface TodayResponse {}

export async function fetchToday({
	signal,
}: FetchTodayInterface): Promise<NoResponse | TodayResponse> {
	try {
		const response = await API.get("주소", { signal });
		if (response.status === 204) {
			return {
				message: "기록된 오늘의 코디가 없어요! \n 오늘의 코디를 추가해 주세요.",
				noResponse: true,
			} as NoResponse;
		} else {
			return response.data as TodayResponse;
		}
	} catch (error) {
		throw new Error((error as AxiosError).message ?? "네트워크 에러");
	}
}
