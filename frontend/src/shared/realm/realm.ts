import Realm from "realm";

export class LaundryDB extends Realm.Object<LaundryDB> {
	clothesId!: number;
	clothesImgUrl!: string;
	textures!: string[];
	lastDayOfWear!: Date;
	lastWash?: Date;

	static generate(
		clothesId: number,
		clothesImgUrl: string,
		textures: string[],
		lastWash: Date,
	) {
		return {
			clothesId,
			clothesImgUrl,
			textures,
			lastWash,
			lastDayOfWear: new Date(),
		};
	}

	static schema = {
		name: "LaundryDB",
		properties: {
			clothesId: "int",
			clothesImgUrl: "string",
			textures: "string[]",
			lastWash: "date",
			lastDayOfWear: "date",
		},
		primaryKey: "clothesId",
	};
}
