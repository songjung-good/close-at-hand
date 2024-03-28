import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	AlarmScreen,
	SettingsScreen,
	ProfileScreen,
	BluetoothConnectionScreen,
} from "../../screens";

export type SettingsParamList = {
	settings: undefined;
	wifi: undefined;
	alarm: undefined;
	profile: undefined;
	bluetooth: undefined;
};

const Stack = createNativeStackNavigator<SettingsParamList>();

const SettingsNav = () => {
	return (
		<Stack.Navigator screenOptions={{ title: "설정" }}>
			<Stack.Screen name="settings" component={SettingsScreen} />
			<Stack.Screen
				name="alarm"
				component={AlarmScreen}
				options={{ headerTitle: "알람 설정" }}
			/>
			<Stack.Screen
				name="profile"
				component={ProfileScreen}
				options={{ headerTitle: "프로필" }}
			/>
			<Stack.Screen name="bluetooth" component={BluetoothConnectionScreen} />
		</Stack.Navigator>
	);
};

export default SettingsNav;
