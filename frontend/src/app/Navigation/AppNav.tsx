import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import HomeNav from "./HomeNav";
import ClosetNav from "./ClosetNav";
import ManagementNav from "./ManagementNav";
import SettingsNav from "./SettingsNav";

import OnBoardingNav from "./OnBoardingNav";
import COLORS from "../constant/COLORS";

// type
export type RootParamList = {
	"0": undefined;
	"1": undefined;
	"2": undefined;
	"3": undefined;
	onboarding: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

const AppNav = () => {
	return (
		<NavigationContainer
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: "#fff" },
			}}
		>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: { height: 80, paddingBottom: 20 },
				}}
			>
				<Tab.Screen
					name="0"
					component={HomeNav}
					options={{
						title: "홈",
						tabBarIcon: ({ size, focused }) => (
							<Ionicons
								name="home"
								size={size}
								color={focused ? COLORS.PupleBlue : COLORS.Black}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="1"
					component={ClosetNav}
					options={{
						title: "옷장",
						tabBarIcon: ({ size, focused }) => (
							<FontAwesome5
								name={focused ? "door-open" : "door-closed"}
								size={size}
								color={focused ? COLORS.PupleBlue : COLORS.Black}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="2"
					component={ManagementNav}
					options={{
						title: "옷 관리",
						tabBarIcon: ({ size, focused }) => (
							<FontAwesome5
								name={focused ? "box-open" : "box"}
								size={size}
								color={focused ? COLORS.PupleBlue : COLORS.Black}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="3"
					component={SettingsNav}
					options={{
						title: "설정",
						tabBarIcon: ({ size, focused }) => (
							<Ionicons
								name="settings"
								size={size}
								color={focused ? COLORS.PupleBlue : COLORS.Black}
							/>
						),
					}}
				/>
				{/* 아레는 임시*/}
				<Tab.Screen name="onboarding" component={OnBoardingNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
