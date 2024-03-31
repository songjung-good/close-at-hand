import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import {
	COLORS,
	FONTSIZE,
	requestAccessFineLocationPermission,
	startDiscovery,
	cancelDiscovery,
	PairDevices,
} from "../../shared";

import { StyledButton } from "../../components";

const BluetoothConnectionScreen: React.FC<RootNavigationProp> = ({
	navigation,
}) => {
	const [isScanned, setIsScanned] = useState(false);

	async function startScan() {
		setIsScanned(false);
		const address = await startDiscovery();
		await PairDevices(address);
		setIsScanned(true);
	}

	useEffect(() => {
		async function permission() {
			const result = await requestAccessFineLocationPermission();
			console.debug("권한 요청 결과", result);
			if (!result) return;
			await startScan();
		}

		permission();

		return () => {
			cancelDiscovery();
		};
	}, []);

	return (
		<View style={styles.container}>
			{isScanned ? (
				<>
					<Text style={[styles.title, styles.textCenter]}>검색 종료.</Text>
					<View style={styles.imageContainer}>
						<Image
							source={require("../../../assets/image/bluetoothSearching.png")}
						></Image>
					</View>
					<Text style={[styles.text, styles.textCenter]}>
						{"클로젯 핸드를 찾을 수 없습니다."}
					</Text>
					<StyledButton title="다시 검색" onPress={startScan} />
				</>
			) : (
				<>
					<Text style={[styles.title, styles.textCenter]}>
						주변의 기기를 검색 중입니다.
					</Text>
					<View style={styles.imageContainer}>
						<Image
							source={require("../../../assets/image/bluetoothSearching.png")}
						></Image>
					</View>
					<Text style={[styles.text, styles.textCenter]}>
						{
							"블루투스와 클로젯 핸드를 켜주시고 잠시 기다려 주세요. \n 약 10초에서 15초정도의 시간이 소요됩니다."
						}
					</Text>
				</>
			)}
		</View>
	);
};

export default BluetoothConnectionScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		color: COLORS.Turquoise,
		fontSize: FONTSIZE.ExtarLarge,
		marginVertical: 4,
	},
	imageContainer: {
		alignItems: "center",
		marginVertical: 10,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
		marginVertical: 5,
	},
	textCenter: {
		textAlign: "center",
	},
});
