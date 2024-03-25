import { StyleSheet, Text, View } from "react-native";
import { StyledButton } from "../buttons";

const LaundryBasket = () => {
	// 세탁 중 데이터에 있는 sqlite에서 연결
	function handleDoLaundry() {
		// 세탁 중 데이터 베이스 삭제
	}

	function handleGotoCloset() {
		// 세탁 안하고 옷장으로 이동
	}
	return (
		<>
			<View style={styles.container}></View>
			<Text style={styles.text}>
				세탁하기를 누르면 빨래 바구니의 옷들을 세탁 상태로 설정합니다.
			</Text>
			<View style={styles.row}>
				<StyledButton
					title="세탁하기"
					backgroundColor="SkyBlue"
					onPress={handleDoLaundry}
				/>
				<StyledButton
					title="옷장으로"
					backgroundColor="Turquoise"
					onPress={handleGotoCloset}
				/>
			</View>
		</>
	);
};

export default LaundryBasket;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		alignSelf: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
	},
});
