import { StyledButton } from "../../components";

const ForDebug: React.FC<RootNavigationProp> = ({ navigation }) => {
	function handleLogin() {
		navigation.navigate("login");
	}

	function handleBluetooth() {
		navigation.navigate("3", { screen: "bluetooth" });
	}

	function handleLaundry() {
		navigation.navigate("laundryMain");
	}

	function handleAddLaundry() {
		// navigation.navigate("2", { screen: "ToDoLaundry" });
	}

	return (
		<>
			<StyledButton
				title="로그인 화면으로"
				onPress={handleLogin}
			></StyledButton>
			<StyledButton
				title="블루투스 화면으로"
				onPress={handleBluetooth}
			></StyledButton>
			<StyledButton
				title="세탁 바구니 화면으로"
				onPress={handleLaundry}
			></StyledButton>
			<StyledButton
				title="세탁물 추가 화면으로"
				onPress={handleAddLaundry}
			></StyledButton>
		</>
	);
};

export default ForDebug;
