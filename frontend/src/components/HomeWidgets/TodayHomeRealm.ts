import AsyncStorage from "@react-native-async-storage/async-storage";

import { LaundryDB } from "../../shared";
import { TodayClothes } from "../types";

export async function saveToRealm(data: TodayClothes[], realm: Realm) {
	const lastSave = await AsyncStorage.getItem("lastSave");

	const today = new Date().toISOString().split("T")[0];

	console.log(data);

	if (lastSave !== today) {
		data.forEach((e) => {
			let texture = 0;
			for (let element of e.texture) {
				if (/앙고라|니트|레이스|린넨|트위드|벨벳|울\/캐시미어|실크/i.test(element)) {
					texture = 1;
					break;
				}
			}

			realm.write(() => {
				realm.create(
					"LaundryDB",
					LaundryDB.generate(e.clothesId, e.clothesImgUrl, texture, new Date()),
				);
			});
		});
	}
	await AsyncStorage.setItem("lastSave", today);
}
