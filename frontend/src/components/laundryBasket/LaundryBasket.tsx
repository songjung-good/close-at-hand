import { FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery, useRealm } from "@realm/react";

import { StyledButton } from "../buttons";
import Laundries from "./Laundries";
import { useState } from "react";
import { LaundryDB } from "../../shared";

interface Props {
	textures: string;
}

const LaundryBasket: React.FC<Props> = ({ textures }) => {
	const realm = useRealm();
	const laundries = useQuery(LaundryDB, (laundry) =>
		laundry.filtered("textures == $0", textures),
	);

	const [selectedLaundries, setSelectedLaundries] = useState<Set<LaundryDB>>(
		new Set(),
	);

	function handleDoLaundry() {
		selectedLaundries.forEach((laundry) => {
			realm.write(() => {
				realm.delete(laundry);
			});
		});
	}

	// function handleGotoCloset() {
	// 	selectedLaundries.forEach((laundry) => {
	// 		realm.write(() => {
	// 			realm.delete(laundry);
	// 		});
	// 	});
	// }

	function handleSelect(laundry: LaundryDB) {
		if (selectedLaundries.has(laundry)) {
			setSelectedLaundries(
				new Set([...selectedLaundries].filter((e) => e !== laundry)),
			);
		} else {
			setSelectedLaundries(new Set(selectedLaundries).add(laundry));
		}
	}

	return (
		<View>
			<FlatList
				style={styles.list}
				data={laundries}
				renderItem={({ item }) => (
					<Laundries
						clothesId={item.clothesId}
						onPress={handleSelect}
						isSelected={selectedLaundries.has(item)}
					/>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
				numColumns={3}
			/>
			<Text style={styles.text}>
				세탁하기를 누르면 빨래 바구니의 옷들을 세탁 상태로 설정합니다.
			</Text>
			<View style={styles.row}>
				<StyledButton
					title="세탁하기"
					backgroundColor="SkyBlue"
					onPress={handleDoLaundry}
				/>
				{/* <StyledButton
					title="옷장으로"
					backgroundColor="Turquoise"
					onPress={handleGotoCloset}
				/> */}
			</View>
		</View>
	);
};

export default LaundryBasket;

const styles = StyleSheet.create({
	containner: {
		justifyContent: "space-between",
	},
	list: {
		marginTop: 15,
	},
	text: {
		alignSelf: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
	},
});
