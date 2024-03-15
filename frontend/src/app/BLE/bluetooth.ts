import { Platform, NativeModules, NativeEventEmitter } from "react-native";
import BleManager from "react-native-ble-manager";

const BleManagerModule = NativeModules.BleManager;
const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);

function byteArrayToObject(byteArray: number[]) {
	const decoder = new TextDecoder();
	const object = JSON.parse(decoder.decode(new Uint8Array(byteArray)));
	return object;
}

export function bluetoothRead({
	deviceId,
	serviceUUID,
	characteristicUUID,
}: ReadProps) {
	BleManager.read(deviceId, serviceUUID, characteristicUUID)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
}

async function ConnectMirror(deviceId: string) {
	return BleManager.connect(deviceId)
		.then((result) => {
			console.log("연결 성공: ", result);
			if (BleManager.listenerCount("newClothes") > 0) {
				BleManager.removeAllListeners("newClothes");
			}
			BleManager.addListener("newClothes", (recieveddata) => {
				return byteArrayToObject(recieveddata);
			});
		})
		.catch((error) => {
			console.log("연결 실패: ", error);
		});
}

async function start(deviceId: string) {
	const result = BleManager.start({ showAlert: false })
		.then(() => {
			console.log("블루투스 시작");
		})
		.then(() => {
			ConnectMirror(deviceId);
			return true;
		})
		.catch((error) => {
			console.log("", error);
			return false;
		});
	return await result;
}

export async function initBluetoothConnect(deviceId?: string) {
	if (!deviceId) {
		return Promise.resolve(false);
	}
	if (Platform.OS === "android") {
		return BleManager.enableBluetooth()
			.then(async () => {
				console.log("블루투스 연결 권한 승인");
				return start(deviceId);
			})
			.catch((error) => {
				console.log("블루투스 연결 권한 거부", error);
				return Promise.resolve(false);
			});
	} else {
		return start(deviceId);
	}
}

interface ReadProps {
	deviceId: string;
	serviceUUID: string;
	characteristicUUID: string;
}

interface WrightProps extends ReadProps {
	data: Object;
}

export function bluetoothWright({
	deviceId,
	serviceUUID,
	characteristicUUID,
	data,
}: WrightProps) {
	const encoder = new TextEncoder();
	const numDataArray = Array.from(encoder.encode(JSON.stringify(data)));

	BleManager.write(deviceId, serviceUUID, characteristicUUID, numDataArray)
		.then(() => {
			console.log("데이터 전송 성공");
		})
		.catch(() => {
			console.log("데이터 전송 실패");
		});
}

export function bluetoothScan() {
	BleManager.scan([], 5, true)
		.then((result) => {
			console.log("스캔시작", result);
		})
		.catch((error) => {
			console.log("스캔 시작 실패 :", error);
		});
}

export function startBLE() {
	BleManager.start({ showAlert: true })
		.then(() => {
			console.log("시작");
		})
		.catch((error) => {
			console.log("실패", error);
		});
}
