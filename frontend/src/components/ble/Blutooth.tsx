import { StyleSheet } from "react-native";
import { StyledButton } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
	bleScan,
	bluetoothEventListner,
	handleLocationPermission,
} from "../../shared/ble/bluetooth";

const Blutooth = () => {
	const navigation = useNavigation<Navigation>();

	useEffect(() => {
		handleLocationPermission();
		const [a, b, c] = bluetoothEventListner();
		bleScan();
	}, []);
	function hanldeCancel() {
		navigation.pop();
	}

	return (
		<StyledButton
			title="취소"
			onPress={hanldeCancel}
			backgroundColor="CarrotRed"
		/>
	);
};

export default Blutooth;

const styles = StyleSheet.create({});
