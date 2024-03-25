import { FlatList, Image, Modal, StyleSheet, Text, View } from "react-native";
import { CENTER, COLORS, FONTSIZE, LaundryDB, ROW, SHADOW } from "../../shared";
import { StyledButton } from "..";
import { useQuery } from "@realm/react";

const DoLaundry = () => {
	const OOTD = useQuery(LaundryDB, (laundry) =>
		laundry.filtered("lastDayOfWear == $0", new Date()),
	);
	function moveToLaundryBasket() {}
	return (
		<Modal>
			<View style={[SHADOW, styles.container]}>
				<FlatList
					style={styles.list}
					data={OOTD}
					renderItem={({ item }) => (
						<Image style={styles.image} source={{ uri: item.clothesImgUrl }} />
					)}
					keyExtractor={(item) => item.clothesId.toString()}
				></FlatList>
				<View style={[CENTER]}>
					<Text style={styles.title}>귀가 완료</Text>
					<Text style={styles.content}>
						선택한 옷을 빨래 바구니에 넣으시겠어요?
					</Text>
				</View>
				<View style={[ROW]}>
					<StyledButton
						title="네"
						onPress={moveToLaundryBasket}
						backgroundColor="SkyBlue"
					></StyledButton>
					<StyledButton
						title="아니요"
						onPress={moveToLaundryBasket}
						backgroundColor="White"
					></StyledButton>
				</View>
			</View>
		</Modal>
	);
};

export default DoLaundry;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	container: {
		justifyContent: "space-around",
		borderWidth: 0.3,
		borderColor: COLORS.Gray,
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	content: {
		fontSize: FONTSIZE.ExtraSmall,
		color: COLORS.Gray,
	},
	image: {
		width: "auto",
		height: "auto",
	},
	list: {
		width: 60,
		height: 190,
	},
});
