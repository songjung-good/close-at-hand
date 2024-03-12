import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../screens";

export type SettingsParamList = {
	settings: undefined;
};

const Stack = createNativeStackNavigator<SettingsParamList>();

const SettingsNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="settings" component={SettingsScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default SettingsNav;
