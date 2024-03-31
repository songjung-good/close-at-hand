import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RealmProvider } from "@realm/react";
import * as Keychain from "react-native-keychain";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNav from "./navigation/AppNav";
import {
	getNotificationPermission,
	scheduleDailyAlarm,
	queryClient,
	useUserActions,
	NotificationType,
	LaundryDB,
} from "../shared";
import { deleteNotification } from "../shared/notifee/notifee";
interface Props {
	readyNow(ready: boolean): void;
}

const App: React.FC<Props> = ({ readyNow }) => {
	const { setAccessToken } = useUserActions();

	useEffect(() => {
		async function getLoginInfo() {
			try {
				const credentials =
					await Keychain.getInternetCredentials("closeAtHand");
				if (credentials) {
					setAccessToken(credentials.password);
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
		<RealmProvider schema={[LaundryDB]} deleteRealmIfMigrationNeeded={true}>
			<QueryClientProvider client={queryClient}>
				<AppNav />
			</QueryClientProvider>
		</RealmProvider>
	);
};

export default App;
