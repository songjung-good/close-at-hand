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

type AllScreen = {
	[key in keyof NativeStackParamList]: NativeStackParamList[key];
};
type Route<T extends keyof AllScreen> = A<AllScreen, T>;

declare global {
	interface Navigation extends NativeStackNavigationProp<AllScreen> {}
	interface RootRouteProp<T extends keyof AllScreen> {
		route: Route<T>;
	}
	interface RootNavigaionProp {
		navigation: NativeStackNavigationProp<AllScreen>;
	}
	interface RootScreenProp<T extends keyof AllScreen> {
		navigation: NativeStackNavigationProp<AllScreen>;
		route: Route<T>;
	}
}
