import {
	PERMISSIONS,
	RESULTS,
	request,
	check,
	Permission,
} from "react-native-permissions";
import BleManager from "react-native-ble-manager";

export async function handleAndroidBluetoothPermissions() {
	async function getPermissions(permissions: Permission) {
		try {
			const result = await check(permissions);
			switch (result) {
				case RESULTS.GRANTED:
					return result;
				case RESULTS.DENIED:
					return await request(permissions);
				default:
					return result;
			}
		} catch (error) {
			console.error("Permission check failed:", error);
			throw error;
		}
	}

	await getPermissions(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT);
	await getPermissions(PERMISSIONS.ANDROID.BLUETOOTH_SCAN);
	console.log("dwaasd");

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
}
