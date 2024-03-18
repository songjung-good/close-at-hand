import { API } from "../../shared";
import { CoordyDetail } from "./types";

export async function fetchDetail(outfitId: number) {
	return API.get(`outfit/${outfitId}`)
		.then((response) => response.data as CoordyDetail)
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
