import { NavigationContainer } from "@react-navigation/native";

import HomeNav from "./Navigation/HomeNav";
import SettingScreen from "./Navigation/SettingsNav";
import ClosetNav from "./Navigation/ClosetNav";
import ManagementNav from "./Navigation/ManagementNav";
import { Tab } from "./Navigation/reactNavigations";

export default function main() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="0" component={HomeNav} />
				<Tab.Screen name="1" component={ClosetNav} />
				<Tab.Screen name="2" component={ManagementNav} />
				<Tab.Screen name="3" component={SettingScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
