import { FlatList, StyleSheet, Text, View } from "react-native";
import { StyledButton } from "../buttons";
import Laundries from "./Laundries";
import { Clothes } from "../types";
import { useState } from "react";

const tempData = [
	{
		clothesId: 0,
		clothesImgUrl:
			"https://news.nateimg.co.kr/orgImg/sh/2023/11/17/6845706_1054038_4316.jpg",
	},
	{
		clothesId: 1,
		clothesImgUrl:
			"https://news.nateimg.co.kr/orgImg/sh/2023/11/17/6845706_1054038_4316.jpg",
	},
	{
		clothesId: 2,
		clothesImgUrl:
			"https://news.nateimg.co.kr/orgImg/sh/2023/11/17/6845706_1054038_4316.jpg",
	},
	{
		clothesId: 3,
		clothesImgUrl:
			"https://news.nateimg.co.kr/orgImg/sh/2023/11/17/6845706_1054038_4316.jpg",
	},
	{
		clothesId: 4,
		clothesImgUrl:
			"https://news.nateimg.co.kr/orgImg/sh/2023/11/17/6845706_1054038_4316.jpg",
	},
];

const LaundryBasket = () => {
	const laundries = tempData;
	const [selectedLaundries, setSelectedLaundries] = useState<Set<number>>(
		new Set(),
	);

	console.log(selectedLaundries);

	// 세탁 중 데이터에 있는 sqlite에서 연결
	function handleDoLaundry() {
		// 세탁 중 데이터 베이스 삭제
	}

	function handleGotoCloset() {
		// 세탁 안하고 옷장으로 이동
		// 세탁 중 데이터 베이스 삭제
	}

	function hadleSelect(clothesId: number) {
		if (selectedLaundries.has(clothesId)) {
			setSelectedLaundries(
				new Set([...selectedLaundries].filter((id) => id !== clothesId)),
			);
		} else {
			setSelectedLaundries(new Set(selectedLaundries).add(clothesId));
		}
	}

	return (
		<View>
			<FlatList
				style={styles.list}
				data={laundries}
				renderItem={({ item }) => (
					<Laundries
						{...item}
						onPress={hadleSelect}
						isSelected={selectedLaundries.has(item.clothesId)}
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
				<StyledButton
					title="옷장으로"
					backgroundColor="Turquoise"
					onPress={handleGotoCloset}
				/>
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
