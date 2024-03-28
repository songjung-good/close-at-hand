import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RealmProvider } from "@realm/react";

import AppNav from "./navigation/AppNav";
import { LaundryDB } from "../shared/realm/realm";
import {
	getNotificationPermission,
	scheduleDailyAlarm,
	queryClient,
	useUserActions,
	NotificationType,
} from "../shared";
import { deleteNotification } from "../shared/notifee/notifee";
interface Props {
	readyNow(ready: boolean): void;
}

const App: React.FC<Props> = ({ readyNow }) => {
	const { setRefreshToken } = useUserActions();

	useEffect(() => {
		async function getLoginInfo() {
			try {
				const token = await AsyncStorage.getItem("CloseAtHandrefreshToken");
				const exp = await AsyncStorage.getItem("CloseAtHandrefreshTokenExp");
				if (token && exp) {
					setRefreshToken({ token, exp });
					// access Token을 얻는 로직 작성
				}
				readyNow(true);
			} catch (error) {
				console.log(error);
			}
		}
		getLoginInfo();

		getNotificationPermission();

		async function setNotifications() {
			const notificationJson = await AsyncStorage.getItem(
				"CloseAtHandNotifications",
			);
			if (notificationJson) {
				const notificationSettings = JSON.parse(
					notificationJson,
				) as NotificationType;
				Object.entries(notificationSettings).forEach(([key, value]) => {
					if (key === "CloseAtHandHomeAlarm" && !value) {
						deleteNotification(key);
					} else if (key === "CloseAtHandHomeAlarm") {
						scheduleDailyAlarm();
					}
				});
			}
		}
		setNotifications();
	}, []);

	return (
		<RealmProvider schema={[LaundryDB]}>
			<QueryClientProvider client={queryClient}>
				<AppNav />
			</QueryClientProvider>
		</RealmProvider>
	);
};

export default App;
