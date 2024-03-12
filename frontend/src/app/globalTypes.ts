import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootParamList } from "./Navigation/AppNav";
import type { HomeParamList } from "./Navigation/HomeNav";
import type { ClosetParamList } from "./Navigation/ClosetNav";
import type { MangeMentParamList } from "./Navigation/ManagementNav";
import type { SettingsParamList } from "./Navigation/SettingsNav";
import type { OnBoardingParamList } from "./Navigation/OnBoardingNav";
declare global {
	interface RootNav extends BottomTabNavigationProp<RootParamList> {}
	interface HomeNav extends NativeStackNavigationProp<HomeParamList> {}
	interface ClosetNav extends NativeStackNavigationProp<ClosetParamList> {}
	interface ManageMentNav
		extends NativeStackNavigationProp<MangeMentParamList> {}
	interface SettingsNav extends NativeStackNavigationProp<SettingsParamList> {}
	interface OnBoardingNav
		extends NativeStackNavigationProp<OnBoardingParamList> {}
}
