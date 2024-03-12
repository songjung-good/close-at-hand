import { NavigationContainer, DefaultTheme, StackRouter } from "@react-navigation/native";
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeNav from "./HomeNav";
import ClosetNav from "./ClosetNav";
import ManagementNav from "./ManagementNav";
import SettingsNav from "./SettingsNav";

import { ControllerScreen } from "../../screens";
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
const Stack = createNativeStackNavigator<RootParamList>();

const AppNav = () => {
	return (
		<NavigationContainer
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: "#fff" },
			}}
		>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="메인" component={HomeNav} />
				<Tab.Screen name="옷장" component={ClosetNav} />
				<Tab.Screen name="OOTP" component={ManagementNav} />
				<Tab.Screen name="설정" component={SettingsNav} />
				{/* 아레는 임시*/}
				<Tab.Screen name="onboarding" component={OnBoardingNav} />
				<Tab.Screen name="기기설정" component={ControllerScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
