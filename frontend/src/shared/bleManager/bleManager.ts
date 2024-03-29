import { PermissionsAndroid, Platform } from "react-native";
import BleManager from "react-native-ble-manager";

export const handleAndroidBluetoothPermissions = () => {
	BleManager.start({ showAlert: false })
		.then(() => {
			console.debug("BleManager initialized");
		})
		.catch((error) => {
			console.error("Error initializing BleManager:", error);
		});

	BleManager.enableBluetooth().then(() => {
		console.debug("Bluetooth is turned on!");
	});

	if (Platform.OS === "android" && Platform.Version >= 31) {
		PermissionsAndroid.requestMultiple([
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
		])
			.then((results) => {
				const allGranted = Object.values(results).every(
					(result) => result === PermissionsAndroid.RESULTS.GRANTED,
				);

				if (allGranted) {
					console.debug(
						"[handleAndroidPermissions] User accepts runtime permissions android 12+",
					);
				} else {
					console.error(
						"[handleAndroidPermissions] User refuses runtime permissions android 12+",
					);
				}
			})
			.catch((error) => console.log(error));
	} else if (Platform.OS === "android" && Platform.Version >= 23) {
		PermissionsAndroid.check(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		).then((checkResult) => {
			if (checkResult) {
				console.debug(
					"[handleAndroidPermissions] runtime permission Android <12 already OK",
				);
			} else {
				PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				).then((requestResult) => {
					if (requestResult) {
						console.debug(
							"[handleAndroidPermissions] User accepts runtime permission android <12",
						);
					} else {
						console.error(
							"[handleAndroidPermissions] User refuses runtime permission android <12",
						);
					}
				});
			}
		});
	}
};
