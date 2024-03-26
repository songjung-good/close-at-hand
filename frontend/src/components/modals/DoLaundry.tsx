import { FlatList, Image, Modal, StyleSheet, Text, View } from "react-native";
import { CENTER, COLORS, FONTSIZE, LaundryDB, ROW, SHADOW } from "../../shared";
import StyledButton from "../buttons/StyledButton";
import { useQuery } from "@realm/react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

interface Props {
	onPress(): void;
}

const DoLaundry: React.FC<Props> = ({ onPress }) => {
	const OOTD = useQuery(LaundryDB, (laundry) =>
		laundry.filtered("lastDayOfWear == $0", new Date()),
	);

	const [selected, setSelected] = useState<Set<LaundryDB>>(new Set(OOTD));

	function moveToLaundryBasket() {
		onPress();
	}

	function handleSelect(item: LaundryDB) {
		if (selected.has(item)) {
			selected.delete(item);
			const deletedSet = new Set(selected);
			return deletedSet;
		} else {
			return setSelected(selected.add(item));
		}
	}

	return (
		<Modal transparent={true}>
			<View style={styles.outerContainer}>
				<View style={[SHADOW, styles.container]}>
					<FlatList
						style={styles.list}
						data={OOTD}
						renderItem={({ item }) => (
							<>
								<Image
									style={styles.image}
									source={{ uri: item.clothesImgUrl }}
								/>
								<FontAwesome
									onPress={handleSelect.bind(this, item)}
									name={selected.has(item) ? "check-circle-o" : "circle-o"}
									size={FONTSIZE.Medium}
								/>
							</>
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
							onPress={onPress}
							backgroundColor="White"
						></StyledButton>
					</View>
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
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	container: {
		borderWidth: 0.3,
		borderColor: COLORS.Gray,
		borderRadius: 15,
		marginVertical: "50%",
		width: "95%",
		backgroundColor: COLORS.White,
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
		marginVertical: 3,
		marginHorizontal: 5,
		width: 54,
		height: 180,
	},
	list: {
		width: 60,
		height: 190,
	},
});
