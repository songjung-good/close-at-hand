import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeNav from "./HomeNav";
import ClosetNav from "./ClosetNav";
import ManagementNav from "./ManagementNav";
import SettingsNav from "./SettingsNav";

import OnBoardingNav from "./OnBoardingNav";

// type
type RootParamList = {
	"0": undefined;
	"1": undefined;
	"2": undefined;
	"3": undefined;
	onboarding: undefined;
};

export type RootNav = BottomTabNavigationProp<RootParamList>;

const Tab = createBottomTabNavigator<RootParamList>();

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
