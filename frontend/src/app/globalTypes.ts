import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp as A } from "@react-navigation/native";

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

type Route<T extends keyof NativeStackParamList> = A<NativeStackParamList, T>;

declare global {
	type Navigation = NativeStackNavigationProp<NativeStackParamList>;
	type RootNavigationProp = {
		navigation: Navigation;
	};
	interface RootScreenProp<T extends keyof NativeStackParamList> {
		navigation: Navigation;
		route: Route<T>;
	}
	type ScreenNametype = keyof NativeStackParamList;
}
