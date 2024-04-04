import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery, useRealm } from "@realm/react";
import { useNavigation } from "@react-navigation/native";

import { StyledButton } from "../buttons";
import Laundries from "./Laundries";
import { LaundryDB, ROW } from "../../shared";
import BasketModal from "./BasketModal";
import { useMutation } from "@tanstack/react-query";
import { laundryDone } from "./API";

export interface BasketProps {
	textures: "일반 세탁" | "울 / 캐시미어" | "기능성 소재";
}

const LaundryBasket: React.FC<BasketProps> = ({ textures }) => {
	const realm = useRealm();
	const navigation = useNavigation<Navigation>();

	const { mutate, isError, error, isPending } = useMutation({
		mutationFn: laundryDone,
		onSuccess: () => {
			setModalVisible(false);

			selectedLaundries.forEach((clothesId) => {
				const laundry = laundries.find((e) => e.clothesId === clothesId);
				console.log(laundry);
				realm.write(() => {
					realm.delete(laundry);
				});
			});

			navigation.pop();
		},
	});

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedLaundries, setSelectedLaundries] = useState<Set<number>>(
		new Set(),
	);

	const textureSelector = ["일반 세탁", "울 / 캐시미어", "기능성 소재"];
	const query = textureSelector.indexOf(textures);
	const laundries = useQuery(LaundryDB, (laundry) =>
		laundry.filtered("textures == $0", query),
	);

	function showModal() {
		setModalVisible(true);
	}

	function handleDoLaundry() {
		const clothesIdList = Array.from(selectedLaundries);
		mutate({ clothesIdList, laundry: false });
	}

	// function handleGotoCloset() {
	// 	selectedLaundries.forEach((laundry) => {
	// 		realm.write(() => {
	// 			realm.delete(laundry);
	// 		});
	// 	});
	// }

	function handleSelect(laundry: number) {
		if (selectedLaundries.has(laundry)) {
			selectedLaundries.delete(laundry);
			setSelectedLaundries(new Set(selectedLaundries));
		} else {
			setSelectedLaundries(new Set(selectedLaundries).add(laundry));
		}
	}

	return (
		<View>
			<BasketModal
				modalVisible={modalVisible}
				textures={textures}
				hideModal={setModalVisible.bind(null, false)}
				doLandry={handleDoLaundry}
			/>

			<FlatList
				style={styles.list}
				data={laundries}
				renderItem={({ item }) => (
					<Laundries
						laundry={item}
						onPress={handleSelect}
						isSelected={selectedLaundries.has(item.clothesId)}
					/>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
				numColumns={3}
			/>
			<Text style={styles.text}>
				세탁하기를 누르면 빨래 바구니의 옷들을 세탁 상태로 설정합니다.
			</Text>
			<View style={[ROW, styles.center]}>
				<StyledButton
					title="세탁하기"
					backgroundColor="SkyBlue"
					onPress={showModal}
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
	center: {
		justifyContent: "center",
	},
});
