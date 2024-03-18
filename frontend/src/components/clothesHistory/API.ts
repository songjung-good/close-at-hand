import { API } from "../../shared";
import { FetchListResponse } from "./types";

export async function fetchList() {
	return API.get("/outfit", {})
		.then((response) => response.data as FetchListResponse[])
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요");
		});
}
