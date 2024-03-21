import { API } from "../../shared";
import { CoordyDetail } from "./types";

interface FetchDetailInterface {
	signal: AbortSignal;
	outfitId: number;
}

export async function fetchDetail({ signal, outfitId }: FetchDetailInterface) {
	return API.get(`outfit/${outfitId}`, { signal })
		.then((response) => response.data as CoordyDetail)
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
