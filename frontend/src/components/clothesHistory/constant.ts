import { ClothesFetchListResponse } from "../types";

export const placeholderData: ClothesFetchListResponse[] = [];

for (let i = 0; i < 3; i++) {
	placeholderData.push({
		ootdId: i,
		ootdImgUrl: " ",
	});
}
