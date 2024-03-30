import {
	PERMISSIONS,
	RESULTS,
	request,
	check,
	Permission,
} from "react-native-permissions";
import BleManager from "react-native-ble-manager";

export const handleAndroidBluetoothPermissions = async () => {
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

	async function getPermissions(permissions: Permission) {
		check(permissions).then(async (result) => {
			switch (result) {
				case RESULTS.GRANTED:
					break;
				case RESULTS.DENIED:
					await request(permissions);
					break;
			}
		});
	}

	const a = getPermissions(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT);
	const b = getPermissions(PERMISSIONS.ANDROID.BLUETOOTH_SCAN);
	await Promise.allSettled([a, b]);
};
