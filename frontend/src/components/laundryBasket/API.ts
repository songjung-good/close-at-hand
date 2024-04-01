import { API } from "../../shared";

interface LaundryDone {
	clothesIdList: number[];
	laundry: boolean;
}

export function laundryDone({ clothesIdList, laundry }: LaundryDone) {
	const data = {
		clothesIdList,
		laundry,
	};
	try {
		return API.put("clothes/laundry", data);
	} catch (error) {
		throw error;
	}
}
