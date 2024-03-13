import { StyleSheet } from "react-native";
import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";

const ManagementMenuList = () => {
	const navigation = useNavigation<ManageMentNav>();

	function handleLaundryPress() {
		navigation.navigate("LaundryMain");
	}

	function handleHistoryPress() {
		navigation.navigate("History");
	}
	return (
		<>
			<Menu
				title="빨래 바구니"
				onPress={handleLaundryPress}
				backgroundColor="PaleBlue"
				image={require("../../../assets/image/laundry_Bascket.png")}
			/>
			<Menu
				title="옷 관리"
				onPress={handleHistoryPress}
				backgroundColor="PupleBlue"
				image={require("../../../assets/image/diary.png")}
			/>
		</>
	);
};

export default ManagementMenuList;

const styles = StyleSheet.create({});
