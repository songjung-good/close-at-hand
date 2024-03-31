import { NavigationContainer } from "@react-navigation/native";

import { Tab } from "./reactNavigations";
import HomeNav from "./HomeNav";
import ClosetNav from "./ClosetNav";
import ManagementNav from "./ManagementNav";
import SettingsNav from "./SettingsNav";

const AppNav = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="0" component={HomeNav} />
				<Tab.Screen name="1" component={ClosetNav} />
				<Tab.Screen name="2" component={ManagementNav} />
				<Tab.Screen name="3" component={SettingsNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
