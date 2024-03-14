import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
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

type RootScreenType = {
	[key in keyof NativeStackParamList]: NativeStackParamList[key];
};

declare global {
	interface RootNav extends BottomTabNavigationProp<RootParamList> {}
	interface HomeNav extends NativeStackNavigationProp<HomeParamList> {}
	interface ClosetNav extends NativeStackNavigationProp<ClosetParamList> {}
	interface ManageMentNav
		extends NativeStackNavigationProp<MangeMentParamList> {}
	interface SettingsNav extends NativeStackNavigationProp<SettingsParamList> {}
	interface OnBoardingNav
		extends NativeStackNavigationProp<OnBoardingParamList> {}
	interface RootScreenProps {
		navigation: NativeStackNavigationProp<RootScreenType>;
		route: RouteProp<RootScreenType>;
	}
}
