import { API } from "../../shared";
import { ClothesFetchListResponse } from "../types";

interface FetchRecentCoordyListInterface {
	signal: AbortSignal;
}
export async function fetchRecentCoordyListList({
	signal,
}: FetchRecentCoordyListInterface) {
	return API.get("outfit", { signal })
		.then((response) => response.data as ClothesFetchListResponse[])
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
