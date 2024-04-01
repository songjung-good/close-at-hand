import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodayResponse } from "./API";
import { LaundryDB } from "../../shared";

export async function saveToRealm(data: TodayResponse, realm: Realm) {
	const lastSave = await AsyncStorage.getItem("lastSave");

	const today = new Date().toISOString().split("T")[0];

	if (lastSave !== today) {
		data.clothes.forEach((e) => {
			let texture = 0;
			for (let element of e.texture) {
				if (/wool|cashmere|Knit|Silk/i.test(element)) {
					texture = 1;
					break;
				}
			}

			realm.write(() => {
				realm.create(
					"LaundryDB",
					LaundryDB.generate(
						e.clothesId,
						e.clothesImgUrl,
						texture,
						new Date(e.lastWashDate),
					),
				);
			});
		});
	}
	await AsyncStorage.setItem("lastSave", today);
}
