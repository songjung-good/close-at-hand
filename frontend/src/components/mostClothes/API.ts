import { AxiosError } from "axios";
import { API } from "../../shared";

interface FetchMostclothesData {
	signal: AbortSignal;
}

interface MostClothes {
	clothesImageUrl: string;
	clothesId: number;
}

export async function fetchMostClothes({ signal }: FetchMostclothesData) {
	try {
		const response = await API.get("주소", { signal });
		return response.data as MostClothes[];
	} catch (error) {
		throw new Error(
			(error as AxiosError).message ?? "인터넷 연결을 확인하세요",
		);
	}
}
