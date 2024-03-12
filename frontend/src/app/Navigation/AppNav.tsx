import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Tab } from "./reactNavigations";
import HomeNav from "./HomeNav";
import ClosetNav from "./ClosetNav";
import ManagementNav from "./ManagementNav";
import SettingsNav from "./SettingsNav";

import OnBoardingNav from "./OnBoardingNav";

const AppNav = () => {
	return (
		<NavigationContainer
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: "#fff" },
			}}
		>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="0" component={HomeNav} />
				<Tab.Screen name="1" component={ClosetNav} />
				<Tab.Screen name="2" component={ManagementNav} />
				<Tab.Screen name="3" component={SettingsNav} />
				{/* 아레는 임시*/}
				<Tab.Screen name="onboarding" component={OnBoardingNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
