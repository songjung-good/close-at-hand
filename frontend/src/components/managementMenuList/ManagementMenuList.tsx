import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";

import basket from "../../../assets/image/laundry_Basket.png";
import diary from "../../../assets/image/diary.png";

const ManagementMenuList = () => {
	const navigation = useNavigation<Navigation>();

	function handleLaundryPress() {
		navigation.navigate("laundryMain", { fromNoti: false });
	}

	function handleHistoryPress() {
		navigation.navigate("history");
	}
	return (
		<>
			<Menu
				title="빨래 바구니"
				onPress={handleLaundryPress}
				backgroundColor="PaleBlue"
				image={basket}
			/>
			<Menu
				title="옷 관리"
				onPress={handleHistoryPress}
				backgroundColor="PurpleBlue"
				image={diary}
			/>
		</>
	);
};

export default ManagementMenuList;
