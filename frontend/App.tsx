import Index from "./src/app/App";
import { StatusBar } from "expo-status-bar";
import notifee, { EventType } from "@notifee/react-native";
import { navigationRef } from "./src/app/navigation/AppNav";
import { notification } from "./src/shared";

notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type === EventType.PRESS && detail.notification) {
		const { notificationType } = detail.notification.data!;
		console.log(navigationRef.isReady());
		if (navigationRef.isReady()) {
			if (notificationType === "HomeArrived") {
				console.log("스크린 이동");
				notification.id = notificationType;
				navigationRef.navigate("2", {
					screen: "laundryMain",
					params: { fromNoti: true },
				});
			}
		}
	}
});

function App() {
	return (
		<>
			<StatusBar style="auto" />
			<Index />
		</>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
