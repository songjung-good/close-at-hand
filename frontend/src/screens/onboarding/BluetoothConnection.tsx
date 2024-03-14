import { Image, StyleSheet, Text, View } from "react-native";
import { StyledButton } from "../../shared";

const BluetoothConnection: React.FC<NavigationProps> = ({ navigation }) => {
	function hanldeCancel() {
		navigation.navigate("0");
	}
	return (
		<View>
			<Text>주변의 기기를 검색 중입니다.</Text>
			<Image
				source={require("../../../assets/image/bluetoothSearching.png")}
			></Image>
			<Text>스마트 미러를 켜주시고 연결될 때까지 잠시 기다려 주세요</Text>
			<StyledButton
				title="취소"
				onPress={hanldeCancel}
				backgroundColor="CarrotRed"
			/>
		</View>
	);
};

export default BluetoothConnection;

const styles = StyleSheet.create({});
