export interface CoordyDetail {
	ootdId: number;
	ootdImgUrl: string;
	clothes: {
		clothesId: number;
		clothesImgUrl: string;
		lastWashDate: string;
		texture: string[];
		category: string[];
		item: string[];
		colors: string[];
		looks: string[];
		prints: string[];
	}[];
	createdAt: string;
}
