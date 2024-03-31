import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import notifee, { EventType } from "@notifee/react-native";
import * as SplashScreen from "expo-splash-screen";

import Index from "./src/app/App";
import { navigationRef } from "./src/app/navigation/AppNav";
import { notification } from "./src/shared";

function waitForNavigationReady() {
	return new Promise<void>((resolve) => {
		const checkNavigationReady = () => {
			if (navigationRef.isReady()) {
				resolve();
			} else {
				setTimeout(checkNavigationReady, 100); // 네비게이션이 준비될 때까지 100ms마다 체크
			}
		};
		checkNavigationReady();
	});
}

notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type === EventType.PRESS && detail.notification) {
		const { notificationType } = detail.notification.data!;
		await waitForNavigationReady();
		if (notificationType === "CloseAtHandHomeAlarm") {
			notification.id = notificationType;
			navigationRef.navigate("2", {
				screen: "laundryMain",
				params: { fromNoti: true },
			});
		}
	}
});

const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED ? true : false;

if (!isStorybook) {
	SplashScreen.preventAutoHideAsync();
}

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

const AppEntryPoint = isStorybook ? require("./.storybook").default : App;

export default AppEntryPoint;
