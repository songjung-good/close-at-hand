import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionsAndroid } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";
import { useMirror } from "../zustand/MirroeStore";

export async function requestAccessFineLocationPermission() {
	const granted = await PermissionsAndroid.requestMultiple([
		PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
		PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
	]);
	return (
		granted["android.permission.BLUETOOTH_SCAN"] ===
			PermissionsAndroid.RESULTS.GRANTED &&
		granted["android.permission.BLUETOOTH_CONNECT"] ===
			PermissionsAndroid.RESULTS.GRANTED
	);
}

export async function startDiscovery() {
	await RNBluetoothClassic.requestBluetoothEnabled();
	try {
		console.debug("검색 시작");
		const granted = await requestAccessFineLocationPermission();

		if (!granted) {
			throw new Error(`Access fine location was not granted`);
		}

		try {
			const unpaired = await RNBluetoothClassic.startDiscovery();

			for (const e of unpaired) {
				console.debug(e.name);
				if (e.name === "Close_at_Hand") {
					const device = {
						address: e.address,
						id: e.id,
						deviceClass: e.deviceClass,
					};
					await AsyncStorage.setItem(
						"CloseAtHandMirror",
						JSON.stringify(device),
					);
					useMirror.setState(() => device);
					return e.address;
				}
			}
			return undefined;
		} finally {
			console.debug("검색 종료");
		}
	} catch (err) {
		console.error(err);
	}
}

export async function cancelDiscovery() {
	try {
		const cancelled = await RNBluetoothClassic.cancelDiscovery();
		console.debug("검색 종료");
		return cancelled;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export async function PairDevices(address?: string) {
	console.debug("연결 시도");
	if (!address) {
		address = JSON.parse(
			(await AsyncStorage.getItem("CloseAtHandMirror")) ?? "{}",
		).address;
		if (!address) {
			console.debug("연결 실패");
			return false;
		}
	}

	try {
		const device = await RNBluetoothClassic.pairDevice(address);
		return device;
	} catch (error) {
		console.debug("블루투스 연결 실패", error);
		return false;
	} finally {
		console.debug("시도한 주소: ", address);
	}
}

export async function dataSendToDevice(message: string) {
	const device = JSON.parse(
		(await AsyncStorage.getItem("CloseAtHandMirror")) ?? "{}",
	);

	return RNBluetoothClassic.writeToDevice(device.address, message);
}
