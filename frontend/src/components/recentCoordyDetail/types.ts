interface CotainsClothes {
	clothesId: number;
	clothesImgUrl: string;
}

export interface CoordyDetail {
	contains: CotainsClothes[];
	outfitUrl: string;
	weather: string;
	date: string;
}
