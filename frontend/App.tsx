import Index from "./src/app/App";
import { StatusBar } from "expo-status-bar";
import notifee, { EventType } from "@notifee/react-native";
import { navigationRef } from "./src/app/navigation/AppNav";
import * as SplashScreen from "expo-splash-screen";
import { notification } from "./src/shared";
import { useEffect, useState } from "react";

notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type === EventType.PRESS && detail.notification) {
		const { notificationType } = detail.notification.data!;
		if (navigationRef.isReady()) {
			if (notificationType === "CloseAtHandHomeAlarm") {
				notification.id = notificationType;
				navigationRef.navigate("2", {
					screen: "laundryMain",
					params: { fromNoti: true },
				});
			}
		}
	}
});

SplashScreen.preventAutoHideAsync();

function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			if (isReady) {
				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, [isReady]);
	return (
		<>
			<StatusBar style="auto" />
			<Index readyNow={setIsReady} />
		</>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
