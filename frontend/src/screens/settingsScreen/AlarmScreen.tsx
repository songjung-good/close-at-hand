import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, FONTSIZE, ROW } from "../../shared";

interface ListItemProps {
	title: string;
	isEnabled: boolean;
	onChange(): void;
}

let INITIAL_VALUE = {
	CloseAtHandHomeAlarm: true,
	CloseAtHandLaundryAlarm: false,
	CloseAtHandClothesAlarm: false,
	CloseAtHandAirDresserAlarm: false,
};

async function getStorageItem() {
	const storageJson = await AsyncStorage.getItem("CloseAtHandNotifications");
	return storageJson
		? (JSON.parse(storageJson) as typeof INITIAL_VALUE)
		: INITIAL_VALUE;
}

const ListItem: React.FC<ListItemProps> = ({ title, isEnabled, onChange }) => {
	return (
		<View style={[ROW, styles.listContainer]}>
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
				onValueChange={onChange}
				value={isEnabled}
			/>
		</View>
	);
};

const AlarmScreen = () => {
	const [notifications, setNotifications] = useState(INITIAL_VALUE);

	useEffect(() => {
		const fetchInitialValue = async () => {
			try {
				const storageJson = await AsyncStorage.getItem(
					"CloseAtHandNotifications",
				);
				const storedSettings = JSON.parse(storageJson ?? "") || {};
				setNotifications({ ...notifications, ...storedSettings });
			} catch (error) {
				console.log(error);
			}
		};
		fetchInitialValue();
	}, []);

	async function handleChange(changeTarget: keyof typeof INITIAL_VALUE) {
		const newNotifications = JSON.stringify({
			...notifications,
			[changeTarget]: !notifications[changeTarget],
		});
		AsyncStorage.setItem("CloseAtHandNotifications", newNotifications);
		setNotifications(await getStorageItem());
	}

	return (
		<View>
			<ListItem
				title="귀가 후 세탁 알림"
				isEnabled={notifications.CloseAtHandHomeAlarm}
				onChange={handleChange.bind(this, "CloseAtHandHomeAlarm")}
			/>
			<ListItem
				title="세탁물 포화 알림"
				isEnabled={notifications.CloseAtHandLaundryAlarm}
				onChange={handleChange.bind(this, "CloseAtHandLaundryAlarm")}
			/>
			<ListItem
				title="옷 등록 알림"
				isEnabled={notifications.CloseAtHandClothesAlarm}
				onChange={handleChange.bind(this, "CloseAtHandClothesAlarm")}
			/>
			<ListItem
				title="에어드레서 사용 알림"
				isEnabled={notifications.CloseAtHandAirDresserAlarm}
				onChange={handleChange.bind(this, "CloseAtHandAirDresserAlarm")}
			/>
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
