import { AxiosError } from "axios";
import { API } from "../../shared";
import { statistic } from "./type";

interface FetchMostclothesData {
	signal: AbortSignal;
}

export async function fetchMostClothes({ signal }: FetchMostclothesData) {
	try {
		const response = await API.get("statistics", { signal });
		return response.data.data as statistic;
	} catch (error) {
		throw new Error(
			(error as AxiosError).message ?? "인터넷 연결을 확인하세요",
		);
	}
}
