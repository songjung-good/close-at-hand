import { LaundryDB } from "../../shared";
import { TodayClothes } from "../types";

export async function saveToRealm(data: TodayClothes[], realm: Realm) {
	console.log(data);

	data.forEach((e) => {
		let texture = 0;
		for (let element of e.texture) {
			if (
				/앙고라|니트|레이스|린넨|트위드|벨벳|울\/캐시미어|실크/i.test(element)
			) {
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
