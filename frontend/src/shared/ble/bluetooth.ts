import {
	NativeEventEmitter,
	NativeModules,
	PermissionsAndroid,
	Platform,
} from "react-native";
import BleManager from "react-native-ble-manager";

const BleManagerModule = NativeModules.BleManager;
export const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export async function handleLocationPermission() {
	if (Platform.OS === "android" && Platform.Version >= 23) {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			);

			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("Location permission granted");
				return true;
			} else {
				console.log("Location permission denied");
				return false;
			}
		} catch (error) {
			console.log("Error requesting location permission:", error);
			return false;
		}
	}
}

export function handleGetConnectedDevices() {
	BleManager.getBondedPeripherals().then((bondedPeripheralsArray) => {
		console.log(bondedPeripheralsArray);
	});
}

export function bluetoothEventListner() {
	let stopDiscoverListener = BleManagerEmitter.addListener(
		"BleManagerDiscoverPeripheral",
		(peripheral) => {
			peripheral.set(peripheral.id, peripheral);
		},
	);

	let stopConnectListener = BleManagerEmitter.addListener(
		"BleManagerConnectPeripheral",
		(peripheral) => {
			console.log("BleManagerConnectPeripheral:", peripheral);
		},
	);

	let stopScanListener = BleManagerEmitter.addListener(
		"BleManagerStopScan",
		() => {
			console.log("scan stopped");
		},
	);

	return [stopDiscoverListener, stopConnectListener, stopScanListener];
}

export function bleScan() {
	BleManager.scan([], 5, true)
		.then(() => {
			console.log("Scanning...");
		})
		.catch((error) => {
			console.error(error);
		});
}
