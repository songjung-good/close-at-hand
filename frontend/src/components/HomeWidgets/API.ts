import { AxiosError } from "axios";
import { API, LaundryDB } from "../../shared";
import { useQuery } from "@realm/react";
import { TodayResponse } from "../types";

interface FetchTodayInterface {
	signal: AbortSignal;
}

interface NoResponse {
	message: string;
	noResponse: true;
}

export async function fetchToday({
	signal,
}: FetchTodayInterface): Promise<NoResponse | TodayResponse> {
	try {
		const response = await API.get("ootd/today", { signal });
		if (response.data.data.clothes.length === 0) {
			return {
				message:
					"기록된 오늘의 코디가 없어요! \n 클로젯 핸드를 통해 오늘의 코디를 추가해 주세요.",
				noResponse: true,
			} as NoResponse;
		} else {
			return response.data.data as TodayResponse;
		}
	} catch (error) {
		throw new Error((error as AxiosError).message ?? "네트워크 에러");
	}
}

// 빨리 바구니에 들어 있는 모든 옷의 개수 쿼리

export function countLaundries() {
	const realm = useQuery(LaundryDB);
	return realm.length;
}

// 상의 개수 하의 개수를 받기

// 오늘 입은 옷과 태그 받기
