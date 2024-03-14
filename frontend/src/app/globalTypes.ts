import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import type { RootParamList } from "./navigation/AppNav";
import type { HomeParamList } from "./navigation/HomeNav";
import type { ClosetParamList } from "./navigation/ClosetNav";
import type { MangeMentParamList } from "./navigation/ManagementNav";
import type { SettingsParamList } from "./navigation/SettingsNav";
import type { OnBoardingParamList } from "./navigation/OnBoardingNav";

type NativeStackParamList = RootParamList &
	HomeParamList &
	ClosetParamList &
	MangeMentParamList &
	SettingsParamList &
	OnBoardingParamList;

type AllScreen = {
	[key in keyof NativeStackParamList]: NativeStackParamList[key];
};

declare global {
	interface Navigation extends NativeStackNavigationProp<AllScreen> {}

	interface NavigationProps {
		navigation: NativeStackNavigationProp<AllScreen>;
	}
	interface RouteProps {
		route: RouteProp<AllScreen>;
	}
}
