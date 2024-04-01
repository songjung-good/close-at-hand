export interface ClothesFetchListResponse {
	ootdId: number;
	ootdImgUrl: string;
}

export interface Clothes {
	clothesId: number;
	clothesImgUrl: string;
}
export interface TodayClothes {
	clothesId: number;
	clothesImgUrl: string;
	lastWashDate: string; // 2024-03-29T08:29:24.287Z
	texture: string[];
	category: string[];
	item: string[];
	colors: string[];
	looks: string[];
	prints: string[];
	clothesTagGroupList: {
		clothesTagGroupName: string;
		clothesTagList: [
			{
				clothesTagName: string;
			},
		];
	}[];
}
export interface TodayResponse {
	ootdId: number;
	ootdImgUrl: "string";
	clothes: TodayClothes[];
}
