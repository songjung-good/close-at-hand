import { ReactNode, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, FONTSIZE } from "../../shared";

interface ListItemProps {
	title: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title }) => {
	// 기본값은 로컬에서 가져오기
	const [isEnabled, setIsEnabled] = useState(true);
	function toggleSwitch() {
		setIsEnabled((prev) => !prev);
	}
	return (
		<View style={styles.listContainer}>
			<Ionicons
				name={isEnabled ? "notifications-circle" : "notifications-off-circle"}
				size={FONTSIZE.Medium}
				color={COLORS.Black}
			/>
			<Text style={styles.text}>{title}</Text>
			<Switch
				style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
				trackColor={{ false: COLORS.Gray, true: COLORS.Blue }}
				thumbColor={COLORS.LightGray}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

const AlarmScreen = () => {
	return (
		<View>
			<ListItem title="귀가 후 세탁 알림" />
			<ListItem title="세탁물 포화 알림" />
			<ListItem title="옷 등록 알림" />
			<ListItem title="에어드레서 사용 알림" />
		</View>
	);
};

export default AlarmScreen;

const styles = StyleSheet.create({
	listContainer: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.Gray,
		paddingVertical: 15,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 10,
		marginVertical: 5,
	},
	text: {
		fontSize: FONTSIZE.Medium,
		marginLeft: 15,
		marginBottom: 10,
		flex: 1,
	},
});
