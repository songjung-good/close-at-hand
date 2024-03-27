import Realm from "realm";

export class LaundryDB extends Realm.Object<LaundryDB> {
	clothesId!: number;
	clothesImgUrl!: string;
	textures!: Realm.Set<string>;
	colors!: Realm.Set<string>;
	lastDayOfWear!: Date;
	lastWash?: Date;

	static generate(
		clothesId: number,
		clothesImgUrl: number,
		textures: Realm.Set<string>,
		colors: Realm.Set<string>,
		lastWash: Date,
	) {
		return {
			clothesId,
			clothesImgUrl,
			textures,
			colors,
			lastWash,
			lastDayOfWear: new Date(),
		};
	}

	static schema = {
		name: "LaundryDB",
		properties: {
			clothesId: "int",
			clothesImgUrl: "string",
			textures: "string<>",
			colors: "string<>",
			lastWash: "date",
			lastDayOfWear: "date",
		},
		primaryKey: "clothesId",
	};
}
