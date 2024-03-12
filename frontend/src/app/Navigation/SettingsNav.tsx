import { Stack } from "./reactNavigations";
import { SettingsScreen } from "../../screens";

const SettingsNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="settings" component={SettingsScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default SettingsNav;
