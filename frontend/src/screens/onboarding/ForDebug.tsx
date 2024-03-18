import { StyledButton } from "../../components";

const ForDebug: React.FC<RootNavigaionProp> = ({ navigation }) => {
	function hanldeLogin() {
		navigation.navigate("login");
	}

	function hanldeBluetooth() {
		navigation.navigate("bluetooth");
	}

	function handleLaundry() {
		navigation.navigate("laundryMain");
	}

	return (
		<>
			<StyledButton
				title="로그인 화면으로"
				onPress={hanldeLogin}
			></StyledButton>
			<StyledButton
				title="블루투스 화면으로"
				onPress={hanldeBluetooth}
			></StyledButton>
			<StyledButton
				title="세탁 바구니 화면으로"
				onPress={handleLaundry}
			></StyledButton>
		</>
	);
};

export default ForDebug;
