import {
	FlatList,
	Image,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { CENTER, COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import StyledButton from "../buttons/StyledButton";
import { useRealm } from "@realm/react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { saveToRealm } from "../HomeWidgets/TodayHomeRealm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodayClothes } from "../types";
import { useMutation } from "@tanstack/react-query";
import { laundryDone } from "./API";

interface Props {
	modalVisible: boolean;
	hideModal(): void;
}

const DoLaundry: React.FC<Props> = ({ modalVisible, hideModal }) => {
	const realm = useRealm();
	const [OOTD, setOOTD] = useState<TodayClothes[]>([]);

	const { mutate, isError, error, isPending } = useMutation({
		mutationFn: laundryDone,
		onSuccess: () => {
			saveToRealm(Array.from(selected), realm);
			setSelected(new Set());
		},
	});

	useEffect(() => {
		async function get() {
			const data = await AsyncStorage.getItem("todayWear");
			if (data) {
				setOOTD(JSON.parse(data));
			}
		}
		get();
	}, []);

	const [selected, setSelected] = useState<Set<TodayClothes>>(new Set(OOTD));

	async function moveToLaundryBasket() {
		if (!OOTD) return;
		const clothesIdList = OOTD.map((e) => e.clothesId);
		mutate({ clothesIdList, laundry: true });
		hideModal();
	}

	function handleSelect(item: TodayClothes) {
		if (selected.has(item)) {
			selected.delete(item);
			const deletedSet = new Set(selected);
			setSelected(deletedSet);
		} else {
			selected.add(item);
			const newSet = new Set(selected);
			setSelected(newSet);
		}
	}

	return (
		<Modal transparent={true} visible={modalVisible}>
			<View style={styles.outerContainer}>
				<View style={[SHADOW, styles.container]}>
					<FlatList
						horizontal
						style={styles.list}
						data={OOTD}
						renderItem={({ item }) => (
							<Pressable onPress={handleSelect.bind(this, item)} style={ROW}>
								<Image
									style={[SHADOW, styles.image]}
									source={{ uri: item.clothesImgUrl }}
								/>
								<FontAwesome
									name={selected.has(item) ? "check-circle-o" : "circle-o"}
									size={FONTSIZE.Medium}
								/>
							</Pressable>
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
							onPress={hideModal}
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
		width: 100,
		height: 180,
	},
	list: {
		height: 190,
	},
});
