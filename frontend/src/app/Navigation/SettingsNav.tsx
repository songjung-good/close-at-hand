import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AlramScreen, SettingsScreen } from "../../screens";

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
			<Stack.Screen name="alram" component={AlramScreen} />
		</Stack.Navigator>
	);
};

export default SettingsNav;
