import { BluetoothDevice } from "react-native-bluetooth-classic";
import { create } from "zustand";

interface device {
	address: string;
	id: string;
	deviceClass: string | undefined;
}
interface Mirror extends device {
	setDevice(device: device): void;
}

export const useMirror = create<Mirror>((set) => ({
	address: "",
	id: "",
	deviceClass: "",
	setDevice(device) {
		set(() => device);
	},
}));
