import {
	NavigationContainer,
	DefaultTheme,
	createNavigationContainerRef,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeNav, { HomeParamList } from "./HomeNav";
import ClosetNav, { ClosetParamList } from "./ClosetNav";
import ManagementNav, { ManagementParamList } from "./ManagementNav";
import SettingsNav, { SettingsParamList } from "./SettingsNav";
import { COLORS, useToken } from "../../shared";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

// type
export type RootParamList = {
	"0": {
		screen: keyof HomeParamList;
		params?: HomeParamList[keyof HomeParamList];
	};
	"1": {
		screen: keyof ClosetParamList;
		params?: ClosetParamList[keyof ClosetParamList];
	};
	"2": {
		screen: keyof ManagementParamList;
		params?: ManagementParamList[keyof ManagementParamList];
	};
	"3": {
		screen: keyof SettingsParamList;
		params?: SettingsParamList[keyof SettingsParamList];
	};
	onboarding: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

export const navigationRef = createNavigationContainerRef<RootParamList>();

const AppNav: React.FC = () => {
	const token = useToken();

	if (navigationRef.isReady() && !token) {
		navigationRef.navigate("0", { screen: "login" });
	}

	return (
		<NavigationContainer
			ref={navigationRef}
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: "#fff" },
			}}
		>
			<Tab.Navigator
				detachInactiveScreens={true}
				screenOptions={{
					headerShown: false,
					tabBarStyle: { height: 80, paddingBottom: 20 },
					lazy: false,
					tabBarButton: (props) => {
						if (token) {
							return <TouchableOpacity {...props} />;
						} else {
							return <></>;
						}
					},
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
								color={focused ? COLORS.PurpleBlue : COLORS.Black}
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
								color={focused ? COLORS.PurpleBlue : COLORS.Black}
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
								color={focused ? COLORS.PurpleBlue : COLORS.Black}
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
								color={focused ? COLORS.PurpleBlue : COLORS.Black}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
