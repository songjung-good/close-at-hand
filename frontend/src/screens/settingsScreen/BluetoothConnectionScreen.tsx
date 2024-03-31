import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import {
	COLORS,
	FONTSIZE,
	handleAndroidBluetoothPermissions,
} from "../../shared";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BluetoothManager, { Peripheral } from "react-native-ble-manager";
import { StyledButton } from "../../components";

const BluetoothConnectionScreen: React.FC<RootNavigationProp> = () => {
	const [isScanned, setIsScanned] = useState(false);

	useEffect(() => {
		async function permission() {
			await handleAndroidBluetoothPermissions();
		}
		permission().then(() => {
			startScan();
		});

		return () => {
			BluetoothManager.stopScan();
			console.debug("stop scan");
		};
	}, []);

	function sleep(ms: number) {
		return new Promise<void>((resolve) => setTimeout(resolve, ms));
	}

	async function startScan() {
		setIsScanned(false);

		await BluetoothManager.scan([], 10, true)
			.then(async () => {
				console.debug("Scanning...");
				await sleep(10 * 1000);
				try {
					const peripherals = await BluetoothManager.getDiscoveredPeripherals();
					const connectablePeripherals: Peripheral[] = [];
					console.debug("검색 결과 출력");
					peripherals.forEach((e) => {
						if (e.advertising.localName) {
							connectablePeripherals.push(e);
							console.debug(e.name);
						} else if (e.name === "bada") {
							console.debug(e);
						}
					});

					peripherals.forEach((e) => {
						if (e.name == "bada") {
							AsyncStorage.setItem("closeAtHandMirrorid", e.id);
							BluetoothManager.connect(e.id);
						}
					});
				} catch (error) {
					console.warn("getDiscoveredPeripherals error", error);
				}
			})
			.catch((error: Error) => {
				console.error(error);
			})
			.finally(() => {
				console.debug("스캔 종료");
				setIsScanned(true);
			});
	}

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
						{"스마트 미러를 찾을 수 없습니다."}
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
							"블루투스와 스마트 미러를 켜주시고 잠시 기다려 주세요. \n 약 10초에서 15초정도의 시간이 소요됩니다."
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
