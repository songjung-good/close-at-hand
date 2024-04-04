import { statistic } from "./type";

export const placeholderData: statistic = { top5UsedClothes: [] };

for (let i = 0; i < 3; i++) {
	placeholderData.top5UsedClothes.push({
		clothesId: i,
		clothesImgUrl: " ",
	});
}
