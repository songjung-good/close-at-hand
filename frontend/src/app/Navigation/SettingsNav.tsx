import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AlramScreen, SettingsScreen, ProfileScreen } from "../../screens";

export type SettingsParamList = {
	settings: undefined;
	wifi: undefined;
	alram: undefined;
	profile: undefined;
};

const Stack = createNativeStackNavigator<SettingsParamList>();

const SettingsNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="settings" component={SettingsScreen} />
			<Stack.Screen
				name="alram"
				component={AlramScreen}
				options={{ headerTitle: "알람 설정" }}
			/>
			<Stack.Screen
				name="profile"
				component={ProfileScreen}
				options={{ headerTitle: "프로필" }}
			/>
		</Stack.Navigator>
	);
};

export default SettingsNav;
