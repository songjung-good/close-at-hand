# 프로젝트 구조도
src
 ┣ app
 ┃ ┣ example
 ┃ ┃ ┣ Index.test.tsx
 ┃ ┃ ┗ Index.tsx
 ┃ ┣ Navigation
 ┃ ┃ ┣ AppNav.tsx
 ┃ ┃ ┣ ClosetNav.tsx
 ┃ ┃ ┣ HomeNav.tsx
 ┃ ┃ ┣ ManagementNav.tsx
 ┃ ┃ ┗ SettingsNav.tsx
 ┃ ┣ App.tsx
 ┃ ┣ AppMain.tsx
 ┃ ┗ globalTypes.ts
 ┣ components
 ┃ ┣ buttons
 ┃ ┃ ┣ __snapshots__
 ┃ ┃ ┃ ┣ styledButton.test.tsx.snap
 ┃ ┃ ┃ ┗ textButton.test.tsx.snap
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ laudryButton.test.tsx
 ┃ ┃ ┣ LaundryButton.tsx
 ┃ ┃ ┣ settingsButton.test.tsx
 ┃ ┃ ┣ SettingsButton.tsx
 ┃ ┃ ┣ styledButton.test.tsx
 ┃ ┃ ┣ StyledButton.tsx
 ┃ ┃ ┣ textButton.test.tsx
 ┃ ┃ ┗ TextButton.tsx
 ┃ ┣ closet
 ┃ ┃ ┣ AddImage.tsx
 ┃ ┃ ┣ AddPreset.tsx
 ┃ ┃ ┣ ClosetItem.tsx
 ┃ ┃ ┣ NewPreset.tsx
 ┃ ┃ ┣ PresetItem.tsx
 ┃ ┃ ┗ SearchModal.tsx
 ┃ ┣ clothesHistory
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ clothesHistoryList.test.tsx
 ┃ ┃ ┣ ClothesHistoryList.tsx
 ┃ ┃ ┗ constant.ts
 ┃ ┣ coordyCard
 ┃ ┃ ┣ coordyCard.test.tsx
 ┃ ┃ ┗ CoordyCard.tsx
 ┃ ┣ example
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ Example.tsx
 ┃ ┃ ┗ UI.tsx
 ┃ ┣ fetchHelper
 ┃ ┃ ┗ LoadingOrError.tsx
 ┃ ┣ HomeWidgets
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ homeinfo.test.tsx
 ┃ ┃ ┣ HomeInfo.tsx
 ┃ ┃ ┣ mirrorConnection.test.tsx
 ┃ ┃ ┣ MirrorConnection.tsx
 ┃ ┃ ┣ todayHome.test.tsx
 ┃ ┃ ┣ TodayHome.tsx
 ┃ ┃ ┗ TodayHomeRealm.ts
 ┃ ┣ inputs
 ┃ ┃ ┣ __snapshots__
 ┃ ┃ ┃ ┗ borderBottomInput.test.tsx.snap
 ┃ ┃ ┣ borderBottomInput.test.tsx
 ┃ ┃ ┣ BorderBottomInput.tsx
 ┃ ┃ ┗ ProfileInput.tsx
 ┃ ┣ laundryBasket
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ BasketModal.tsx
 ┃ ┃ ┣ DoLaundry.tsx
 ┃ ┃ ┣ Laundries.tsx
 ┃ ┃ ┣ laundryBasket.test.tsx
 ┃ ┃ ┗ LaundryBasket.tsx
 ┃ ┣ managementMenuList
 ┃ ┃ ┣ managementMenu.test.tsx
 ┃ ┃ ┣ ManagementMenuList.tsx
 ┃ ┃ ┗ Menu.tsx
 ┃ ┣ monthlyCoordi
 ┃ ┃ ┗ MonthlyCoordi.tsx
 ┃ ┣ recentCoordyDetail
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ DetailUI.tsx
 ┃ ┃ ┣ RecentCoordyDetail.test.tsx
 ┃ ┃ ┣ RecentCoordyDetail.tsx
 ┃ ┃ ┗ types.ts
 ┃ ┣ RecentCoordyList
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┗ RecentCoordyList.tsx
 ┃ ┣ signIn
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┗ SignIn.tsx
 ┃ ┣ SignUp
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ SignUp.tsx
 ┃ ┃ ┗ UI.tsx
 ┃ ┣ Statistics
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ Card.tsx
 ┃ ┃ ┣ constant.ts
 ┃ ┃ ┣ Statistics.tsx
 ┃ ┃ ┣ statisticstest.test.tsx
 ┃ ┃ ┗ type.ts
 ┃ ┣ index.ts
 ┃ ┗ types.ts
 ┣ screens
 ┃ ┣ closet
 ┃ ┃ ┣ ClosetMainScreen.tsx
 ┃ ┃ ┣ ClosetScreen.tsx
 ┃ ┃ ┣ ClothInfoScreen.tsx
 ┃ ┃ ┣ CoordiPresetScreen.tsx
 ┃ ┃ ┗ CoordiScreen.tsx
 ┃ ┣ home
 ┃ ┃ ┣ HomeScreen.tsx
 ┃ ┃ ┗ LoginScreen.tsx
 ┃ ┣ management
 ┃ ┃ ┣ __snapshots__
 ┃ ┃ ┃ ┗ HistoryMainScreen.test.tsx.snap
 ┃ ┃ ┣ HistoryMainScreen.test.tsx
 ┃ ┃ ┣ HistoryMainScreen.tsx
 ┃ ┃ ┣ landryMainScreen.test.tsx
 ┃ ┃ ┣ LandryMainScreen.tsx
 ┃ ┃ ┣ laundryBasketScreen.test.tsx
 ┃ ┃ ┣ LaundryBasketScreen.tsx
 ┃ ┃ ┣ ManagementMainScreen.tsx
 ┃ ┃ ┣ ManagementScreen.tsx
 ┃ ┃ ┣ RecentCoordyDetailScreen.tsx
 ┃ ┃ ┗ RecentCoordyListScreen.tsx
 ┃ ┣ settingsScreen
 ┃ ┃ ┣ AlarmScreen.tsx
 ┃ ┃ ┣ API.ts
 ┃ ┃ ┣ BluetoothConnectionScreen.tsx
 ┃ ┃ ┣ ProfileScreen.tsx
 ┃ ┃ ┗ SettingsScreen.tsx
 ┃ ┣ index.ts
 ┃ ┗ index.tsx
 ┗ shared
 ┃ ┣ axios
 ┃ ┃ ┗ axios.ts
 ┃ ┣ bluetooth
 ┃ ┃ ┗ bluetoothClassic.ts
 ┃ ┣ constant
 ┃ ┃ ┗ COLORS.ts
 ┃ ┣ notifee
 ┃ ┃ ┗ notifee.ts
 ┃ ┣ realm
 ┃ ┃ ┗ realm.ts
 ┃ ┣ styles
 ┃ ┃ ┣ commonStyleSheet.ts
 ┃ ┃ ┗ STYLES.ts
 ┃ ┣ tanstackquery
 ┃ ┃ ┗ tanstackQuery.ts
 ┃ ┣ util
 ┃ ┃ ┗ token.ts
 ┃ ┣ zustand
 ┃ ┃ ┣ example
 ┃ ┃ ┃ ┗ exampleStore.ts
 ┃ ┃ ┣ MirroeStore.ts
 ┃ ┃ ┣ store.ts
 ┃ ┃ ┗ userStore.ts
 ┃ ┗ index.ts

# App.tsx
```
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import notifee, { EventType } from "@notifee/react-native";
import * as SplashScreen from "expo-splash-screen";

import Index from "./src/app/App";
import { navigationRef } from "./src/app/navigation/AppNav";
import { notification } from "./src/shared";

function waitForNavigationReady() {
	return new Promise<void>((resolve) => {
		const checkNavigationReady = () => {
			if (navigationRef.isReady()) {
				resolve();
			} else {
				setTimeout(checkNavigationReady, 100); // 네비게이션이 준비될 때까지 100ms마다 체크
			}
		};
		checkNavigationReady();
	});
}

notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type === EventType.PRESS && detail.notification) {
		const { notificationType } = detail.notification.data!;
		await waitForNavigationReady();
		if (notificationType === "CloseAtHandHomeAlarm") {
			notification.id = notificationType;
			navigationRef.navigate("2", {
				screen: "laundryMain",
				params: { fromNoti: true },
			});
		}
	}
});

notifee.onForegroundEvent(async ({ type, detail }) => {
	if (type === EventType.PRESS && detail.notification) {
		const { notificationType } = detail.notification.data!;
		await waitForNavigationReady();
		if (notificationType === "CloseAtHandHomeAlarm") {
			notification.id = notificationType;
			navigationRef.navigate("2", {
				screen: "laundryMain",
				params: { fromNoti: true },
			});
		}
	}
});

const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED ? true : false;

if (!isStorybook) {
	SplashScreen.preventAutoHideAsync();
}

function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			if (isReady) {
				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, [isReady]);

	return (
		<>
			<StatusBar style="auto" />
			<Index readyNow={setIsReady} />
		</>
	);
}

const AppEntryPoint = isStorybook ? require("./.storybook").default : App;

export default AppEntryPoint;
```

# src
## app
```src\app\App.tsx
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RealmProvider } from "@realm/react";
import * as Keychain from "react-native-keychain";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNav from "./navigation/AppNav";
import {
	getNotificationPermission,
	scheduleDailyAlarm,
	queryClient,
	useUserActions,
	NotificationType,
	LaundryDB,
} from "../shared";
import { deleteNotification } from "../shared/notifee/notifee";
interface Props {
	readyNow(ready: boolean): void;
}

const App: React.FC<Props> = ({ readyNow }) => {
	const { setAccessToken } = useUserActions();

	useEffect(() => {
		async function getLoginInfo() {
			try {
				const credentials =
					await Keychain.getInternetCredentials("closeAtHand");
				if (credentials) {
					setAccessToken(credentials.password);
				}
				readyNow(true);
			} catch (error) {
				console.log(error);
			}
		}
		getLoginInfo();

		getNotificationPermission();

		async function setPermissions() {
			const notificationJson = await AsyncStorage.getItem(
				"CloseAtHandNotifications",
			);
			if (notificationJson) {
				const notificationSettings = JSON.parse(
					notificationJson,
				) as NotificationType;
				Object.entries(notificationSettings).forEach(async ([key, value]) => {
					if (key === "CloseAtHandHomeAlarm" && !value) {
						await deleteNotification(key);
					} else if (key === "CloseAtHandHomeAlarm") {
						await scheduleDailyAlarm();
					}
				});
			} else {
				await scheduleDailyAlarm();
			}
		}
		setPermissions();
	}, []);

	return (
		<RealmProvider schema={[LaundryDB]} deleteRealmIfMigrationNeeded={true}>
			<QueryClientProvider client={queryClient}>
				<AppNav />
			</QueryClientProvider>
		</RealmProvider>
	);
};

export default App;

```



```src\app\AppMain.tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/index";
import AppNav from "./Navigation/AppNav";

export default function main() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppNav />
		</QueryClientProvider>
	);
}
```




```src\app\globalTypes.ts
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp as A } from "@react-navigation/native";

import type { RootParamList } from "./navigation/AppNav";
import type { HomeParamList } from "./navigation/HomeNav";
import type { ClosetParamList } from "./navigation/ClosetNav";
import type { ManagementParamList } from "./navigation/ManagementNav";
import type { SettingsParamList } from "./navigation/SettingsNav";

type NativeStackParamList = RootParamList &
	HomeParamList &
	ClosetParamList &
	ManagementParamList &
	SettingsParamList;

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
	type ScreenNameType = keyof NativeStackParamList;
}
```


### example
```src\app\example\Index.tsx
import { Example } from "../../components";

const Index = () => {
	return <Example />;
};

export default Index;
```



### Navigation
```src\app\Navigation\AppNav.tsx
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
						lazy: true,
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
```



```src\app\Navigation\ClosetNav.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClosetMainScreen, ClothInfoScreen, CoordiPresetScreen } from "../../screens";

export type ClosetParamList = {
	closet: undefined;
	cloth: {id: number};
	preset: {id: number}
	newpreset: undefined;
};

const Stack = createNativeStackNavigator<ClosetParamList>();

const ClosetNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerTitleStyle: { fontWeight: "bold" } }}
		>
			<Stack.Screen name="closet" component={ClosetMainScreen} options={{ title: "내 옷장" }}/>
			<Stack.Screen name="cloth" component={ClothInfoScreen} options={{ title: "옷 정보" }}/>
			<Stack.Screen name="preset" component={CoordiPresetScreen} options={{ title: "프리셋" }}/>
		</Stack.Navigator>
	);
};

export default ClosetNav;
```



```src\app\Navigation\HomeNav.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen } from "../../screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type HomeParamList = {
	home: undefined;
	controller: undefined;
	login: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<SafeAreaProvider>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="home"
			>
				<Stack.Screen name="login" component={LoginScreen} />
				<Stack.Screen name="home" component={HomeScreen} />
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default HomeNav;
```



```src\app\Navigation\ManagementNav.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HistoryMainScreen,
	LandryMainScreen,
	ManagementMainScreen,
	RecentCoordyDetailScreen,
	RecentCoordyListScreen,
	LaundryBasketScreen,
} from "../../screens";

export type ManagementParamList = {
	managementMain: undefined;
	laundryMain: { fromNoti: boolean };
	history: undefined;
	recentCoordyList: undefined;
	recentCoordyDetail: { ootdId: number };
	laundryBasket: { basket: "일반 세탁" | "울 / 캐시미어" | "기능성 소재" };
};
const Stack = createNativeStackNavigator<ManagementParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerTitleStyle: { fontWeight: "bold" } }}
			initialRouteName="managementMain"
		>
			<Stack.Screen
				name="managementMain"
				component={ManagementMainScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="laundryMain"
				component={LandryMainScreen}
				options={{ title: "빨래 바구니" }}
			/>
			<Stack.Screen
				name="history"
				component={HistoryMainScreen}
				options={{ title: "옷 관리" }}
			/>
			<Stack.Screen
				name="recentCoordyList"
				component={RecentCoordyListScreen}
				options={{ title: "최근 코디" }}
			/>
			<Stack.Screen
				name="recentCoordyDetail"
				component={RecentCoordyDetailScreen}
				options={{ title: "최근 코디 상세" }}
			/>
			<Stack.Screen
				name="laundryBasket"
				component={LaundryBasketScreen}
				options={{ title: "세탁하기" }}
			/>
		</Stack.Navigator>
	);
};

export default ManagementNav;
```



```src\app\Navigation\SettingsNav.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	AlarmScreen,
	SettingsScreen,
	ProfileScreen,
	BluetoothConnectionScreen,
} from "../../screens";

export type SettingsParamList = {
	settings: undefined;
	wifi: undefined;
	alarm: undefined;
	profile: undefined;
	bluetooth: undefined;
};

const Stack = createNativeStackNavigator<SettingsParamList>();

const SettingsNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ title: "설정" }}
			initialRouteName="settings"
		>
			<Stack.Screen name="settings" component={SettingsScreen} />
			<Stack.Screen
				name="alarm"
				component={AlarmScreen}
				options={{ headerTitle: "알람 설정" }}
			/>
			<Stack.Screen
				name="profile"
				component={ProfileScreen}
				options={{ headerTitle: "프로필" }}
			/>
			<Stack.Screen name="bluetooth" component={BluetoothConnectionScreen} />
		</Stack.Navigator>
	);
};

export default SettingsNav;
```



## components
```src\components\index.ts
// 옷장
export { default as ClosetItem } from "./closet/ClosetItem";
export { default as SearchModal } from "./closet/SearchModal";
export { default as PresetItem } from "./closet/PresetItem";
export { default as NewPreset } from "./closet/NewPreset";
export { default as AddPreset } from "./closet/AddPreset";
export { default as AddImage } from "./closet/AddImage";

// 홈
export { default as MirrorConnection } from "./HomeWidgets/MirrorConnection";
export { default as TodayHome } from "./HomeWidgets/TodayHome";
export { default as HomeInfo } from "./HomeWidgets/HomeInfo";

// 옷 관리
export { default as ManagementMenuList } from "./managementMenuList/ManagementMenuList";

// 옷 관리 - 옷 기록
export { default as ClothesHistoryList } from "./clothesHistory/ClothesHistoryList";
export { default as RecentCoordyList } from "./RecentCoordyList/RecentCoordyList";
export { default as RecentCoordyDetail } from "./recentCoordyDetail/RecentCoordyDetail";
export { default as MostClothes } from "./Statistics/Statistics";

// 옷 관리 - 세탁
export { default as LaundryButton } from "./buttons/LaundryButton";
export { default as LaundryBasket } from "./laundryBasket/LaundryBasket";
export { default as DoLaundry } from "./laundryBasket/DoLaundry";

// OnBoarding
export { default as SignIn } from "./signIn/SignIn";
export { default as SignUp } from "./signUp/SignUp";

// 설정 화면
export { default as SettingsButton } from "./buttons/SettingsButton";

// UI
export { default as BorderBottomInput } from "./inputs/BorderBottomInput";
export { default as ProfileInput } from "./inputs/ProfileInput";
export { default as StyledButton } from "./buttons/StyledButton";
export { default as TextButton } from "./buttons/TextButton";
export { default as LoadingOrError } from "./fetchHelper/LoadingOrError";
```



```src\components\types.ts
export interface ClothesFetchListResponse {
	ootdId: number;
	ootdImgUrl: string;
}

export interface Clothes {
	clothesId: number;
	clothesImgUrl: string;
}
export interface TodayClothes {
	clothesId: number;
	clothesImgUrl: string;
	lastWashDate: string; // 2024-03-29T08:29:24.287Z
	texture: string[];
	category: string[];
	item: string[];
	colors: string[];
	looks: string[];
	prints: string[];
	clothesTagGroupList: {
		clothesTagGroupName: string;
		clothesTagList: [
			{
				clothesTagName: string;
			},
		];
	}[];
}
export interface TodayResponse {
	ootdId: number;
	ootdImgUrl: "string";
	clothes: TodayClothes[];
}
```


### buttons
```src\components\buttons\index.ts
export { default as BorderBottomInput } from "../inputs/BorderBottomInput";
export { default as StyledButton } from "./StyledButton";
export { default as TextButton } from "./TextButton";
```


```src\components\buttons\LaundryButton.tsx
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";
import bublePicture1 from "../../../assets/image/bubble.png";
import bublePicture2 from "../../../assets/image/bubble.png";

interface Props {
	title: "일반 세탁" | "울 / 캐시미어" | "기능성 소재";
	bubble1: boolean;
	onPress: (title: Props["title"]) => void;
}

const LaundryButton: React.FC<Props> = ({ title, bubble1, onPress }) => {
	return (
		<Pressable onPress={onPress.bind(this, title)}>
			<View style={styles.container}>
				<Text style={styles.overlayText}>{title}</Text>
				<Image
					style={styles.image}
					source={bubble1 ? bublePicture1 : bublePicture2}
					testID="image"
				/>
			</View>
		</Pressable>
	);
};

export default LaundryButton;

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginVertical: 10,
		height: 170,
		width: 170,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		marginTop: "35%",
		zIndex: 999,

		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	image: {
		height: 170,
		width: 170,
		resizeMode: "contain",
	},
});
```



```src\components\buttons\SettingsButton.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";

import Wifi from "../../../assets/image/Wifi.svg";
import Alarm from "../../../assets/image/alarm.svg";
import Profile from "../../../assets/image/Profile.svg";
import { COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import { useNavigation } from "@react-navigation/native";

interface Props {
	name: "bluetooth" | "alarm" | "profile";
	title: string;
}

const SettingsButton: React.FC<Props> = ({ name, title }) => {
	const navigation = useNavigation<Navigation>();

	let content;
	if (name === "alarm") {
		content = <Alarm height={100} />;
	} else if (name === "profile") {
		content = <Profile height={100} />;
	} else {
		content = <Wifi height={100} />;
	}
	return (
		<Pressable onPress={() => navigation.navigate(name)}>
			<View style={[SHADOW, ROW, styles.container]}>
				{content}
				<Text style={styles.text}>{title}</Text>
			</View>
		</Pressable>
	);
};

export default SettingsButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.White,
		alignItems: "center",
		height: FONTSIZE.Large * 2.5,
		marginVertical: 10,
		borderRadius: 15,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: FONTSIZE.Large,
		marginLeft: 10,
		paddingHorizontal: 10,
		flex: 1,
	},
});
```


```src\components\buttons\SettingsButton.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";

import Wifi from "../../../assets/image/Wifi.svg";
import Alarm from "../../../assets/image/alarm.svg";
import Profile from "../../../assets/image/Profile.svg";
import { COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import { useNavigation } from "@react-navigation/native";

interface Props {
	name: "bluetooth" | "alarm" | "profile";
	title: string;
}

const SettingsButton: React.FC<Props> = ({ name, title }) => {
	const navigation = useNavigation<Navigation>();

	let content;
	if (name === "alarm") {
		content = <Alarm height={100} />;
	} else if (name === "profile") {
		content = <Profile height={100} />;
	} else {
		content = <Wifi height={100} />;
	}
	return (
		<Pressable onPress={() => navigation.navigate(name)}>
			<View style={[SHADOW, ROW, styles.container]}>
				{content}
				<Text style={styles.text}>{title}</Text>
			</View>
		</Pressable>
	);
};

export default SettingsButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.White,
		alignItems: "center",
		height: FONTSIZE.Large * 2.5,
		marginVertical: 10,
		borderRadius: 15,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: FONTSIZE.Large,
		marginLeft: 10,
		paddingHorizontal: 10,
		flex: 1,
	},
});
```



```src\components\buttons\StyledButton.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared/styles/STYLES";

const colorMatch = {
	SkyBlue: COLORS.Black,
	Turquoise: COLORS.Black,
	CarrotRed: COLORS.White,
	Black: COLORS.White,
	White: COLORS.Black,
};

const rippleMatch = {
	SkyBlue: COLORS.LightMint,
	Turquoise: COLORS.SkyBlue,
	CarrotRed: COLORS.CarrotRedRipple,
	Black: COLORS.White,
	White: COLORS.LightGray,
};

interface Props {
	title: string;
	onPress(): void;
	backgroundColor?: keyof typeof colorMatch;
}

const StyledButton: React.FC<Props> = ({ title, onPress, backgroundColor }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.pressed,
					{ backgroundColor: COLORS[backgroundColor ?? "SkyBlue"] },
					backgroundColor === "White" && styles.whiteBackground,
				]}
				android_ripple={{ color: rippleMatch[backgroundColor ?? "SkyBlue"] }}
				onPress={onPress}
				testID="button"
			>
				<Text
					style={[
						styles.text,
						{ color: colorMatch[backgroundColor ?? "SkyBlue"] },
					]}
				>
					{title}
				</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	button: {
		borderColor: COLORS.White,
		borderRadius: 5,
		borderWidth: 1,
		minHeight: 45,
		margin: 10,
		padding: 10,
	},
	pressed: {
		opacity: 0.75,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
		textAlign: "center",
		fontWeight: "bold",
		width: "auto",
	},
	whiteBackground: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: COLORS.Gray,
	},
});
```



```src\components\buttons\TextButton.tsx
import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../../shared/styles/STYLES";

interface Props {
	text: string;
	onPress(): void;
}

const TextButton: React.FC<Props> = ({ text, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
			testID="button"
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

export default TextButton;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	pressed: {
		opacity: 0.75,
	},
	text: {
		color: COLORS.PurpleBlue,
		backgroundColor: COLORS.White,
	},
});
```



### closet
```src\components\closet\AddImage.tsx
import React, { useState } from "react";
import {
	Modal,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	Alert,
} from "react-native";
import {
	ImagePickerResult,
	launchImageLibraryAsync,
	MediaTypeOptions,
	PermissionStatus,
	useCameraPermissions,
} from "expo-image-picker";
import FormData from "form-data";

// 컴포넌트
import { COLORS, FONTSIZE } from "../../shared/styles/STYLES";
// axios
import { API } from "../../shared";

// 프리셋
interface PresetProps {
	onClose: () => void;
	presetId: number;
	setisUpdate: () => void;
}

interface PresetInfo {
	presetId: number;
	presetImgUrl: string;
	presetName: string;
}

const AddImage: React.FC<PresetProps> = ({
	onClose,
	presetId,
	setisUpdate,
}) => {
	const [camerPermissionInformation, requestPermission] =
		useCameraPermissions();
	// 모달상태
	const [imageModalVisible, setimageModalVisible] = useState(false);
	const [presetName, setPresetName] = useState("");
	const [image, setImage] = useState<ImagePickerResult>();

	const pickImage = async () => {
		if (camerPermissionInformation?.status !== PermissionStatus.GRANTED) {
			const permissionResponse = await requestPermission();

			if (!permissionResponse.granted) {
				Alert.alert("권한 없음", "갤러리 접근 권한을 가지고 있지 않습니다.");
			}
		}

		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			aspect: [4, 4],
			quality: 1,
			selectionLimit: 1,
			allowsMultipleSelection: false,
		});
		if (result?.assets?.length) {
			setImage(result);
		}
	};

	const updatePreset = async () => {
		try {
			const formData = new FormData();
			console.log(presetName);

			formData.append(
				"request",
				JSON.stringify({
					presetId,
					presetName: presetName,
				}),
			);

			// ImagePicker saves the taken photo to disk and returns a local URI to it
			if (image?.assets?.length) {
				let localUri = image?.assets[0].uri;
				let filename = localUri.split("/").pop()!;

				let match = /\.(\w+)$/.exec(filename);
				let type = match ? `image/${match[1]}` : `image`;

				formData.append("presetImg", { uri: localUri, name: filename, type });
			}

			// formData.append('presetImg', {uri: image, name: 'image.jpg', type: 'image/jpeg' }

			// 프리셋 업데이트를 위한 axios 요청
			const response = await API.put("/preset", formData, {
				headers: {
					"content-type": 'multipart/form-data; boundary="boundary"',
				},
			});
			if (response.data.result === "SUCCESS") {
				console.log("프리셋이 성공적으로 업데이트되었습니다.");
			} else {
				console.error("프리셋 업데이트 중 오류가 발생했습니다.");
			}
		} catch (error) {
			console.error("프리셋 업데이트 중 오류가 발생했습니다:", error);
		}
	};

	const openModal = () => {
		setimageModalVisible(!imageModalVisible);
	};

	const handleSend = () => {
		updatePreset(); // 프리셋 업데이트 수행
		setimageModalVisible(false); // 모달 닫기
	};

	const handleBack = () => {
		setimageModalVisible(false); // 모달 닫기
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={openModal} style={styles.absoluteButton}>
				<Text style={styles.buttonText}> 추가! </Text>
			</TouchableOpacity>
			<Modal
				animationType="none"
				transparent={true}
				visible={imageModalVisible}
			>
				<View style={styles.modalContainer}>
					{/* 제목을 입력하는 칸 */}
					<TextInput
						style={styles.inputText}
						placeholder="제목을 입력하세요"
						onChangeText={(text) => {
							setPresetName(text);
						}}
						value={presetName}
					/>
					{/* 사진을 업로드하는 칸 */}
					<View style={styles.imgContainer}>
						<TouchableOpacity onPress={pickImage}>
							{image?.assets ? (
								<Image
									source={{ uri: image.assets[0].uri }}
									style={{ width: 200, height: 200 }}
								/>
							) : (
								<Text style={styles.uploadText}>
									여기를 눌러서 사진을 업로드하세요
								</Text>
							)}
						</TouchableOpacity>
					</View>

					{/* 전송하는 버튼 */}
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.sendButton} onPress={handleSend}>
							<Text style={styles.sendButtonText}>전송</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.backButton} onPress={handleBack}>
							<Text style={styles.backButtonText}>뒤로가기</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	absoluteButton: {
		position: "absolute",
		left: "25%",
		top: "5%",
		backgroundColor: COLORS.Turquoise,
		borderRadius: 10,
		padding: 10,
		zIndex: 1,
	},
	buttonText: {
		color: COLORS.White,
		fontSize: FONTSIZE.Small,
		fontWeight: "bold",
		textAlign: "center",
	},
	modalContainer: {
		backgroundColor: COLORS.White,
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		// alignItems: "center",
	},
	inputText: {
		height: "7%",
		margin: "10%",
		borderWidth: 1,
		borderColor: COLORS.Turquoise,
		marginTop: "10%",
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	imgContainer: {
		height: "50%",
		margin: "10%",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: COLORS.Turquoise,
	},
	uploadText: {
		color: COLORS.Turquoise,
		fontSize: FONTSIZE.Medium,
		marginTop: 20,
		margin: "10%",
	},
	sendButtonText: {
		color: COLORS.White,
		fontSize: FONTSIZE.Medium,
		fontWeight: "bold",
	},
	buttonContainer: {
		flexDirection: "row", // 버튼을 가로로 배열합니다.
		justifyContent: "space-around", // 버튼 사이에 공간을 일정하게 배치합니다.
		marginTop: 20, // 전송 버튼과 뒤로가기 버튼 사이의 간격 조정을 위한 마진 설정
	},
	sendButton: {
		backgroundColor: COLORS.Turquoise,
		width: "35%",
		height: "35%",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	backButton: {
		backgroundColor: COLORS.CarrotRedRipple,
		width: "35%",
		height: "35%",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	backButtonText: {
		color: COLORS.White,
		fontSize: FONTSIZE.Medium,
	},
});

export default AddImage;
```



```src\components\closet\AddPreset.tsx
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, Pressable, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES';
// axios
import { API } from "../../shared";
import { AxiosError } from 'axios';

// 프리셋
interface AddPresetProps {
  onClose: () => void;
  presetId: number;
  setisUpdate: () => void;
};

// 옷 인터페이스
interface ClothInfo {
  clothesId: number,
  clothesImgUrl: string,
};

const AddPreset: React.FC<AddPresetProps> = ({ onClose, presetId, setisUpdate }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  // 전체 옷 리스트
  const [clothes, setClothes] = useState<ClothInfo[]>([]);
  // 선택된 옷 목록
  const [selectedClothes, setSelectedClothes] = useState<ClothInfo[]>([]);

  useEffect(() => {
    // 옷 목록을 가져오는 axios 요청
    const fetchClothes = async () => {
      try {
        const response = await API.get('/clothes');
        setClothes(response.data.data);
      } catch (error) {
        console.error('옷 목록을 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchClothes();
  }, []);

  const renderClothesList = () => {
    return (
      <FlatList
        style={styles.flatList}
        numColumns={3}
        data={clothes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCloth(item)}>
            <View style={[styles.clothesItem, selectedClothes.find(cloth => cloth.clothesId === item.clothesId) && { backgroundColor: COLORS.LightGray }]}>
              <Image source={{ uri: item.clothesImgUrl }} style={{ width: 75, height: 75, borderRadius: 50 }} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.clothesId.toString()} 
      />
    );
  };

  // 옷을 토글하는 함수
  const toggleCloth = (cloth: ClothInfo) => {
    const index = selectedClothes.findIndex(item => item.clothesId === cloth.clothesId);
    if (index !== -1) {
      // 이미 선택된 옷이면 선택 해제
      const updatedClothes = selectedClothes.filter(item => item.clothesId !== cloth.clothesId);
      setSelectedClothes(updatedClothes);
    } else {
      // 선택되지 않은 옷이면 선택
      const updatedClothes = [...selectedClothes, cloth];
      setSelectedClothes(updatedClothes);
    }
  };

  const updatePreset = async () => {
    try {
      const clothesIdList = selectedClothes.map(cloth => cloth.clothesId);

      // 프리셋 업데이트를 위한 axios 요청
      const response = await API.put('/preset/add', {
        presetId: presetId,
        clothesIdList: clothesIdList,
      });
      console.log(clothesIdList);
      if (response.data.result === 'SUCCESS') {
        console.log('프리셋이 성공적으로 업데이트되었습니다.');
      } else {
        console.error('프리셋 업데이트 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('프리셋 업데이트 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={openModal} >
        <View style={styles.addButton}>
          <Text style={styles.buttonText}> 추가!  </Text> 
        </View>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>
            옷 목록
          </Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            {/* 카테고리 탭 (예시: 상의, 하의, 외투) 추가하기 */}
          </View>
          {renderClothesList()}
          <View style={{ alignItems: 'center', margin: 10 }}>
            <Button 
              title="등록" 
              onPress={async () => {
                // 등록 버튼을 누르면 모달을 닫고 프리셋을 업데이트합니다.
                onClose();
                await updatePreset();
                setModalVisible(false); // 모달을 닫습니다.
                setisUpdate();
              }} />
          </View>
        </View>
      </Modal>
    </View> 
  );
};

const styles = StyleSheet.create({
  flatList:{
    paddingVertical: 20,
  },
  modalContainer:{
    backgroundColor: COLORS.White,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  titleText:{
    fontSize: FONTSIZE.Large,
    marginVertical: 10,
    marginLeft: 20,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  buttonText: {
    color: COLORS.Turquoise,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  addButton: {
    borderColor: COLORS.Mint,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  clothesText: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "center",
  },
  clothesItem: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 8,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '30%',
  },
  addButtonText: {
    color: COLORS.PurpleBlue,
    fontSize: FONTSIZE.Large,
    textAlign: "center",
  },
})

export default AddPreset;
```



```src\components\closet\ClosetItem.tsx
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONTSIZE, COLORS } from "../../shared";

// 옷 인터페이스
interface ClothInfo {
  clothesId: number;
  clothesImgUrl: string;
}


const ClosetItem: React.FC<ClothInfo> = ({ clothesId, clothesImgUrl }) => {
  const navigation = useNavigation<Navigation>()
  const handleClothItemClick = () => {
    // ClothInfoScreen으로 이동하는 코드
    navigation.navigate('cloth', { id: clothesId }); // ClothInfoScreen으로 cloth의 id 전달
  };

  return (
    <TouchableOpacity onPress={handleClothItemClick}>
      <View style={styles.clothesItem}>
        <Image source={{ uri: clothesImgUrl }} style={{ width: 70, height: 70 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clothesText: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "center",
  },
  clothesItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});

export default ClosetItem;
```



```src\components\closet\NewPreset.tsx
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, Pressable, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES'
// axios
import { API } from "../../shared";
import { AxiosError } from 'axios';

// 프리셋
interface NewPresetProps {
  onClose: () => void;
};
// 옷 인터페이스
interface ClothInfo {
  clothesId: number,
  clothesImgUrl: string,
};

const NewPreset: React.FC<NewPresetProps> = ({ onClose }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);
  // 전체 옷 리스트
  const [clothes, setClothes] = useState<ClothInfo[]>([]);
  // 선택된 옷 목록
  const [selectedClothes, setSelectedClothes] = useState<ClothInfo[]>([]);
  // 프리셋 이름
  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    // 옷 목록을 가져오는 axios 요청
    const fetchClothes = async () => {
      try {
        const response = await API.get('/clothes');
        setClothes(response.data.data);
      } catch (error) {
        console.error('옷 목록을 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchClothes();
  }, []);

  const renderClothesList = () => {
    return (
      <FlatList
        style={styles.flatList}
        numColumns={3}
        data={clothes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCloth(item)}>
            <View style={[styles.clothesItem, selectedClothes.find(cloth => cloth.clothesId === item.clothesId) && { backgroundColor: COLORS.LightGray }]}>
              <Image source={{ uri: item.clothesImgUrl }} style={{ width: 75, height: 75, borderRadius: 50 }} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.clothesId.toString()} 
      />
    );
  };

  // 옷을 토글하는 함수
  const toggleCloth = (cloth: ClothInfo) => {
    const index = selectedClothes.findIndex(item => item.clothesId === cloth.clothesId);
    if (index !== -1) {
      // 이미 선택된 옷이면 선택 해제
      const updatedClothes = selectedClothes.filter(item => item.clothesId !== cloth.clothesId);
      setSelectedClothes(updatedClothes);
    } else {
      // 선택되지 않은 옷이면 선택
      const updatedClothes = [...selectedClothes, cloth];
      setSelectedClothes(updatedClothes);
    }
  };

  const saveSelectedClothes = async () => {
    try {
      const clothesIdList = selectedClothes.map(cloth => cloth.clothesId);

      const formData = new FormData();
      formData.append('request', JSON.stringify({
        presetName: presetName, // presetName 추가
        clothesIdList: clothesIdList
      }));

      // 프리셋 등록을 위한 axios 요청
      const response = await API.post('/preset', formData, {
        headers: {
          "Content-Type": 'multipart/form-data; boundary="boundary"',
      },
      });
  
      if (response.data.result === 'SUCCESS') {
        console.log('프리셋이 성공적으로 저장되었습니다.');
      } else {
        console.error('프리셋 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('프리셋 저장 중 오류가 발생했습니다:', error);
    }
  };

  // 모달을 열거나 닫는 함수
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const sendData = () => {
    // 모달을 닫기 전에 선택된 옷을 저장합니다.
    saveSelectedClothes();
    setModalVisible(!modalVisible);
  };


  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>
            옷 목록
          </Text>
          <TextInput
            style={styles.input}
            placeholder="프리셋 이름 입력"
            onChangeText={(text) => setPresetName(text)}
            value={presetName}
          />
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            {/* 카테고리 탭 (예시: 상의, 하의, 외투) 추가하기 */}
          </View>
          {renderClothesList()}
          <View style={styles.buttonContainer}>
            <Button
              title="등록"
              onPress={() => sendData()}
              style={styles.button}
            />
            <Button
              title="취소"
              onPress={() => toggleModal()}
              style={styles.button}
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>➕</Text>
      </Pressable>
    </View> 
  );
};

const styles = StyleSheet.create({
  flatList:{
    paddingVertical: 20,
  },
  modalContainer:{
    backgroundColor: COLORS.White,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  titleText:{
    fontSize: FONTSIZE.Large,
    marginVertical: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  buttonText: {
    color: COLORS.CarrotRed,
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
  addButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    height: 100,
    width: '90%',
    borderBlockColor: COLORS.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  clothesText: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "center",
  },
  clothesItem: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 8,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '30%',
  },
})

export default NewPreset;
```



```src\components\closet\PresetItem.tsx
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
// 컴포넌트 불러오기
import { FONTSIZE, COLORS } from "../../shared";

interface presetItem {
  presetId: number;
  presetName: string;
  clothes: Clothes[];
}

interface Clothes {
  clothesId: number;
  clothesImgUrl: string;
  lastWashDate: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

const PresetList: React.FC<{ clothes: Clothes[] }> = ({ clothes }) => {
  return (
    <ScrollView horizontal>
      {clothes.map((clothesItem, index) => (
        <Image key={index} source={{ uri: clothesItem.clothesImgUrl }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const PresetItem: React.FC<presetItem> = ({ presetId, presetName, clothes }) => {
  const navigation = useNavigation<NavigationProp<Record<string, object>>>();
  const handlePresetNavigation = () => {
    navigation.navigate('preset', { id: presetId });
  };

  return (
    <View style={styles.presetContainer}>
      <Text style={styles.presetName}>{presetName}</Text>
      <TouchableOpacity onPress={handlePresetNavigation}>
        <PresetList clothes={clothes} />
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 35,
    marginRight: 10, // 사진 간 간격 조절
  },
  presetName: {
    fontSize: FONTSIZE.ExtraSmall,
    color: COLORS.Black,
    textAlign: "left",
  },
  presetContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderColor: COLORS.Black,
    borderWidth: 1,
    borderRadius: 25,
    width: '90%',
  },
  presetItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default PresetItem;
```



```src\components\closet\SearchModal.tsx
import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES';
// axios
import { API } from "../../shared";

interface ClothesTag {
  clothesTagName: string;
}

interface ClothesTagGroup {
  clothesTagGroupName: string;
  clothesTagList: ClothesTag[];
}

interface SearchModalProps {
  onClose: () => void;
  // 클릭된 태그 정보를 상위 컴포넌트로 전달하기 위한 콜백 함수
  onTagsSelected: (tags: string[]) => void; 
};

const TagItem: React.FC<{ tag: ClothesTag; onClick: (name: string) => void }> = ({ tag, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const addTag = () => {
    setClicked(!clicked);
    onClick(tag.clothesTagName);
  };

  return (
    <View style={styles.tagTitle}>
      <Pressable onPress={addTag} style={[styles.tagItem, clicked ? styles.tagItemClicked : null]}>
        <Text style={styles.tagText}>{tag.clothesTagName}</Text>
      </Pressable>
    </View>
  );
};

const TagList: React.FC<{ onTagsSelected: (tags: string[]) => void }> = ({ onTagsSelected }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((name) => name !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  // 클릭된 태그 ID 정보를 전달
  useEffect(() => {
    const fetchTagList = async () => {
      try {
        const response = await API.get('clothes/tag');
        const tagData = response.data.data;
        // 태그 데이터를 묶어서 태그 그룹 리스트로 구성
        const clothesTagGroups: ClothesTagGroup[] = [];
        for (const key in tagData) {
          const group: ClothesTagGroup = {
            clothesTagGroupName: key,
            clothesTagList: tagData[key].map((tagName: string) => ({ clothesTagName: tagName })),
          };
          clothesTagGroups.push(group);
        }
        setClothesTagGroups(clothesTagGroups);
      } catch (error) {
        console.error('태그 목록을 불러오는데 문제가 발생했습니다:', error);
      }
    };

    fetchTagList();
  }, []);

  const [clothesTagGroups, setClothesTagGroups] = useState<ClothesTagGroup[]>([]);

  useEffect(() => {
    const selectedTagNames: string[] = []; // 선택된 태그 이름의 배열로 수정
    clothesTagGroups.forEach((group) => {
      group.clothesTagList.forEach((tag) => {
        if (selectedTags.includes(tag.clothesTagName)) {
          selectedTagNames.push(tag.clothesTagName);
        }
      });
    });
    onTagsSelected(selectedTagNames);
  }, [selectedTags]);


  return (
    <ScrollView>
      <View style={styles.tagContainer}>
        {clothesTagGroups.map((group) => (
          <View key={group.clothesTagGroupName}>
            <Text style={styles.tagGroupTitle}>{group.clothesTagGroupName}</Text>
            <ScrollView horizontal={true} style={styles.tagGroupContainer}>
            {group.clothesTagList.map((tag) => (
              <TagItem key={tag.clothesTagName} tag={tag} onClick={handleTagClick} />
            ))}
          </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const SearchModal: React.FC<SearchModalProps> = ({ onTagsSelected }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);
   // 선택된 태그 상태 추가
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 모달이 열릴 때 이전 선택 태그 복원
  useEffect(() => {
    const getSelectedTags = async () => {
      try {
        const storedTags = await AsyncStorage.getItem('selectedTags');
        if (storedTags !== null) {
          setSelectedTags(JSON.parse(storedTags));
        }
      } catch (error) {
        console.error('태그 가져오는데 문제가 생겼어!:', error);
      }
    };

    if (modalVisible) {
      getSelectedTags();
    }
  }, [modalVisible]);

  // 모달이 닫힐 때 선택된 태그 저장
  useEffect(() => {
    const saveSelectedTags = async () => {
      try {
        await AsyncStorage.setItem('selectedTags', JSON.stringify(selectedTags));
      } catch (error) {
        console.error('태그 저장하는데 문제가 생겼어!:', error);
      }
    };

    if (!modalVisible) {
      saveSelectedTags();
    }
  }, [modalVisible, selectedTags]);

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>검색</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>🔍</Text>
              </Pressable>
            </View>
            <TagList onTagsSelected={onTagsSelected} />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>🔍</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  modalView: {
    marginTop: 20,
    backgroundColor: COLORS.White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    borderBottomColor: COLORS.Black,
    borderBottomWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: COLORS.White,
    borderColor: COLORS.Black,
    borderWidth: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagContainer: {
    marginHorizontal: 15,
    marginBottom: 20, // 아래 여백 추가
  },
  tagGroupTitle: {
    fontSize: FONTSIZE.Large,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tagGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap', // 수정: 한 줄에 모든 태그를 표시하고, 넘치는 경우 가로 스크롤 제공
    overflow: 'scroll', // 넘치는 경우 스크롤 표시
  },
  tagItem: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.Black,
    borderWidth: 1,
    marginTop: 5,
    marginRight: 5,
  },
  tagTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  tagItemClicked: {
    backgroundColor: COLORS.SkyBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontSize: FONTSIZE.ExtraSmall,
    padding: 5,
  },
});

export default SearchModal;
```


### clothesHistory
```src\components\clothesHistory\API.ts
import { API } from "../../shared";
import { ClothesFetchListResponse } from "../types";

interface FetchListInterface {
	signal: AbortSignal;
}

export async function fetchList({ signal }: FetchListInterface) {
	return API.get("ootd", { signal })
		.then((response) => {
			console.log(response.data.data);
			return response.data.data as ClothesFetchListResponse[];
		})
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
```



``` src\components\clothesHistory\ClothesHistoryList.tsx
import { useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import CordiCard from "../coordyCard/CoordyCard";
import { fetchList } from "./API";
import { placeholderData } from "./constant";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import { FONTSIZE } from "../../shared";

interface Props {
	refreshing: boolean;
}
const ClothesHistoryList: React.FC<Props> = ({ refreshing }) => {
	const { data, isError, error, isLoading, refetch } = useQuery({
		queryKey: ["clothesList"],
		queryFn: fetchList,
		placeholderData,
	});

	useEffect(() => {
		refetch();
	}, [refreshing]);

	return (
		<>
			{data && data.length ? (
				<FlatList
					horizontal={true}
					data={data}
					renderItem={({ item }) => (
						<CordiCard {...item} noOnPress={isLoading} />
					)}
					keyExtractor={(item) => item.ootdId.toString()}
				/>
			) : (
				<Text style={styles.text}>저장된 최근 코디가 없습니다.</Text>
			)}
			{(isError || isLoading) && (
				<LoadingOrError isLoading={false} isError={isError} error={error} />
			)}
		</>
	);
};

export default ClothesHistoryList;

const styles = StyleSheet.create({
	text: {
		fontSize: FONTSIZE.Medium,
		textAlign: "center",
	},
});
```



```src\components\clothesHistory\constant.ts
import { ClothesFetchListResponse } from "../types";

export const placeholderData: ClothesFetchListResponse[] = [];

for (let i = 0; i < 3; i++) {
	placeholderData.push({
		ootdId: i,
		ootdImgUrl: " ",
	});
}
```


### coordyCard
```src\components\coordyCard\CoordyCard.tsx
import { Image, Pressable, StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ClothesFetchListResponse } from "../types";
import { COLORS } from "../../shared";

interface Props extends ClothesFetchListResponse {
	noOnPress?: boolean;
	widthMathToScreen?: boolean;
}

let windowWidth = Dimensions.get("window").width / 3 - 10;

const CordiCard: React.FC<Props> = ({
	ootdId,
	ootdImgUrl,
	noOnPress,
	widthMathToScreen,
}) => {
	const navigation = useNavigation<Navigation>();

	function handlePress(ootdId: number) {
		if (noOnPress) return;
		navigation.navigate("recentCoordyDetail", { ootdId });
	}

	return (
		<Pressable onPress={handlePress.bind(this, ootdId)}>
			<View testID={`card-${ootdId}`} style={styles.container}>
				<Image
					style={[styles.image, widthMathToScreen && { width: windowWidth }]}
					source={{ uri: ootdImgUrl }}
				/>
			</View>
		</Pressable>
	);
};

export default CordiCard;

const styles = StyleSheet.create({
	container: {
		height: 240,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "contain",
		backgroundColor: COLORS.White,
		borderWidth: 0.8,
		borderColor: COLORS.Gray,
	},
});
```



### fetchHelper
```src\components\fetchHelper\LoadingOrError.tsx
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared";

interface Props {
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
}

const LoadingOrError: React.FC<Props> = ({ isLoading, isError, error }) => {
	return (
		<View style={styles.container}>
			{isLoading && <Text style={styles.text}>Loading...</Text>}
			{isError &&
				(error?.message ? (
					<Text style={styles.text}>{error.message}</Text>
				) : (
					<Text style={styles.text}>인터넷 연결을 확인하세요</Text>
				))}
		</View>
	);
};

export default LoadingOrError;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 9999,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: COLORS.White,
	},
	text: {
		justifyContent: "center",
		textAlign: "center",
		fontSize: FONTSIZE.Large,
	},
});
```


### HomeWidgets
```src\components\HomeWidgets\API.ts
import { AxiosError } from "axios";
import { API, LaundryDB } from "../../shared";
import { useQuery } from "@realm/react";
import { TodayResponse } from "../types";

interface FetchTodayInterface {
	signal: AbortSignal;
}

interface NoResponse {
	message: string;
	noResponse: true;
}

export async function fetchToday({
	signal,
}: FetchTodayInterface): Promise<NoResponse | TodayResponse> {
	try {
		const response = await API.get("ootd/today", { signal });

		if (!response.data.data.ootdImgUrl) {
			return {
				message:
					"기록된 오늘의 코디가 없어요! \n 클로젯 핸드를 통해 오늘의 코디를 추가해 주세요.",
				noResponse: true,
			} as NoResponse;
		} else {
			return response.data.data as TodayResponse;
		}
	} catch (error) {
		throw new Error((error as AxiosError).message ?? "네트워크 에러");
	}
}

// 빨리 바구니에 들어 있는 모든 옷의 개수 쿼리

export function countLaundries() {
	const realm = useQuery(LaundryDB);
	return realm.length;
}

export async function fetchCount({ signal }: FetchTodayInterface) {
	try {
		const response = await API.get("statistics/count", { signal });
		return response.data.data as number;
	} catch (error) {
		throw new Error((error as AxiosError).message ?? "네트워크 에러");
	}
}
```


```src\components\HomeWidgets\HomeInfo.tsx
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTSIZE } from "../../shared";
import { ROW } from "../../shared";
import { countLaundries, fetchCount } from "./API";

import full from "../../../assets/image/laundry-basket-full.png";
import empty from "../../../assets/image/laundry-basket-empty.png";
import tshirts from "../../../assets/image/tshirt.png";
import pant from "../../../assets/image/pant.png";
import { useQuery } from "@tanstack/react-query";

interface TitleProps {
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

type MoveTo = "laundryMain" | "closet";

interface widget {
	onPress(moveTo: MoveTo): void;
}

const Basket: React.FC<widget> = ({ onPress }) => {
	const count = countLaundries();

	return (
		<Pressable
			style={styles.container}
			onPress={onPress.bind(null, "laundryMain")}
		>
			<Text style={[styles.text, { fontSize: FONTSIZE.Large }]}>{count}개</Text>
			<Image
				style={[styles.image, styles.center]}
				source={count > 10 ? full : empty}
			/>
			<Title title="빨래 바구니" />
		</Pressable>
	);
};

const Closet: React.FC<widget> = ({ onPress }) => {
  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['home', 'count'],
    staleTime: 1000 * 60 * 60 * 60, // 1시간
    queryFn: fetchCount
  })

	return (
		<Pressable style={styles.container} onPress={onPress.bind(null, "closet")}>
			<View style={[ROW, styles.rowContainer]}>
				<Image style={styles.image} source={tshirts} />
        <Image style={styles.image} source={pant} />
			</View>
			<View style={styles.line} />
			<View style={[ROW, styles.rowContainer]}>
				<Text style={styles.text}>옷장의 옷 {data}개</Text>
			</View>
			<Title title="옷장" />
		</Pressable>
	);
};

const HomeInfo = () => {
	const navigation = useNavigation<Navigation>();

	function handleWidgetPress(title: MoveTo) {
		if (title === "closet") {
			navigation.navigate("1", { screen: title });
		} else {
			navigation.navigate("2", { screen: title, params: { fromNoti: false } });
		}
	}
	return (
		<View style={[ROW, styles.outerContainer]}>
			<Basket onPress={handleWidgetPress} />
			<Closet onPress={handleWidgetPress} />
		</View>
	);
};

export default HomeInfo;

const styles = StyleSheet.create({
	outerContainer: {
		marginTop: 15,
		width: "100%",
	},
	container: {
		borderRadius: 10,
		backgroundColor: COLORS.LightMint,
		flex: 1,
		marginHorizontal: 5,
		paddingVertical: 10,
		paddingHorizontal: 3,
	},
	rowContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: FONTSIZE.Medium,
		fontWeight: "bold",
		color: COLORS.Turquoise,
	},
	image: {
		resizeMode: "contain",
		marginVertical: 15,
	},
	center: {
		alignSelf: "center",
	},
	titleContainer: {
		position: "absolute",
		backgroundColor: COLORS.Mint,
		bottom: 0,
		right: 0,
		paddingHorizontal: 10,
		paddingVertical: 3,
		borderTopLeftRadius: 15,
	},
	title: {
		fontSize: FONTSIZE.Small,
		fontWeight: "bold",
		color: COLORS.White,
	},
	line: {
		borderTopWidth: 3,
		borderColor: COLORS.Mint,
		marginHorizontal: 5,
	},
});
```



```src\components\HomeWidgets\MirrorConnection.tsx
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

import {
	COLORS,
	dataSendToDevice,
	FONTSIZE,
	PairDevices,
	SHADOW,
} from "../../shared";
import { ROW } from "../../shared";
import img1 from "../../../assets/image/mirror.png";
import img2 from "../../../assets/image/touchMessage.png";

interface ButtonProps {
	title: string;
	onPress(): void;
}

const ButtonBlock: React.FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<Pressable style={[SHADOW, styles.button]} onPress={onPress}>
			<Text style={styles.buttonFont}>{title}</Text>
		</Pressable>
	);
};

const Overlay = () => {
	function handleChangeLayout() {
		return;
	}

	async function handleCloseAtHandIoT(identifier: string) {
		const device = await PairDevices();
		if (!device) {
			Alert.alert("연결된 기기가 없습니다.");
			return;
		}
		const result = dataSendToDevice(identifier);
		console.debug("블루투스 요청 결과", result);
		Alert.alert("클로젯 핸드를 확인해주세요");
	}

	return (
		<View style={[styles.container, styles.overlay]}>
			<View style={[ROW, styles.buttonGroup]}>
				<ButtonBlock
					title={"클로젯 핸드\n레이아웃 변경"}
					onPress={handleChangeLayout}
				/>
				<ButtonBlock
					title="AR 코디하기"
					onPress={handleCloseAtHandIoT.bind(this, "AR")}
				/>
			</View>
			<View style={[ROW, styles.buttonGroup]}>
				<ButtonBlock
					title={"클로젯핸드로\n스타일 등록하기"}
					onPress={handleCloseAtHandIoT.bind(this, "style")}
				/>
			</View>
		</View>
	);
};

const MirrorConnection = () => {
	const [mode, setMode] = useState(false);

	function HanldePress() {
		setMode((prev) => !prev);
	}

	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={HanldePress}
				hitSlop={mode ? 1080 : 0}
				style={styles.container}
			>
				<View style={[ROW, styles.innerContainer]}>
					<Image source={img1} />
					<View style={styles.textContainer}>
						<Text>Close-At-Hand가 연결되었어요!</Text>
						<Image source={img2} />
					</View>
				</View>
				{mode && <Overlay />}
			</Pressable>
		</View>
	);
};

export default MirrorConnection;

const styles = StyleSheet.create({
	outerContainer: {
		marginTop: 10,
	},
	container: {
		backgroundColor: COLORS.LightGray,
		width: "100%",
		borderRadius: 10,
		overflow: "hidden",
		zIndex: 999,
	},
	innerContainer: {
		padding: 20,
		justifyContent: "space-around",
	},
	textContainer: {
		justifyContent: "space-around",
	},
	overlay: {
		backgroundColor: COLORS.Black,
		position: "absolute",
		opacity: 0.7,
		flexDirection: "column",
		justifyContent: "space-around",
		height: "100%",
	},
	buttonGroup: {
		justifyContent: "space-around",
		margin: 10,
	},
	button: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: COLORS.Gray,
		borderWidth: 1,
		borderRadius: 30,
		padding: 20,
		justifyContent: "center",
	},
	buttonFont: {
		fontSize: FONTSIZE.Small,
		textAlign: "center",
	},
});
```



```src\components\HomeWidgets\TodayHome.tsx
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import AntDesign from "react-native-vector-icons/AntDesign";

import { CENTER, COLORS, FONTSIZE, ROW } from "../../shared";
import { fetchToday } from "./API";
import { ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodayResponse } from "../types";

const alternative = ["무난룩", "OOTD", "캐주얼"];

const DataExist: React.FC<TodayResponse> = ({ ootdImgUrl, clothes }) => {
	const tag = clothes
		.map((e, idx) => {
			const tag = e.looks || alternative[idx];
			return {
				tag,
				id: e.clothesId || idx,
			};
		})
		.slice(0, 3);
	return (
		<View style={[ROW, styles.flex]} testID="data-box">
			<View style={[CENTER, styles.flex]}>
				<Text style={styles.todayFashion}>오늘의 패션</Text>
				{tag.map((e, index) => (
					<View style={ROW} key={e.id}>
						<View style={styles.textContainer}>
							<Text style={styles.text}># {e.tag}</Text>
						</View>
					</View>
				))}
			</View>
			<View style={[styles.flex, styles.imgContainer]}>
				<Image style={[styles.img]} source={{ uri: ootdImgUrl }} />
			</View>
		</View>
	);
};

interface StyledTextProps {
	content: string;
}

const StyledText: React.FC<StyledTextProps> = ({ content }) => {
	return <Text style={styles.statusText}>{content}</Text>;
};

const TodayHome = () => {
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["home", "today", new Date().toISOString().split("T")[0]],
		queryFn: fetchToday,
		// gcTime: 1000 * 60 * 60 * 60 * 1, // 1시간
		placeholderData: {
			message:
				"기록된 오늘의 코디가 없어요! \n 터치하여 오늘의 코디를 받아보세요.",
			noResponse: true,
		},
	});

	function handlePress() {
		// 에러, noResponse 응답 혹은 오늘 입은 옷의 정보가 없는 경우에 refetch
		if (
			isError ||
			(data && "noResponse" in data) ||
			data?.clothes.length === 0 ||
			!data?.ootdImgUrl
		) {
			refetch();
		}
	}

	let content: ReactNode;

	if (data) {
		if ("noResponse" in data) {
			content = (
				<>
					<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
					<StyledText content={data.message} />
				</>
			);
		} else {
			content = (
				<DataExist
					ootdImgUrl={data.ootdImgUrl}
					clothes={data.clothes}
					ootdId={data.ootdId}
				/>
			);
			async function save(data: TodayResponse) {
				await AsyncStorage.setItem("todayWear", JSON.stringify(data.clothes));
			}

			save(data);
		}
	}

	if (isLoading) {
		content = (
			<>
				<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
				<StyledText
					content={"데이터를 받아 오는 중입니다. \n 잠시만 기다려 주세요"}
				/>
			</>
		);
	} else if (isError) {
		content = (
			<>
				<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
				<StyledText
					content={error.message ?? "인터넷 연결을 확인하여 주세요"}
				/>
			</>
		);
	}

	return (
		<Pressable
			style={styles.container}
			onPress={handlePress}
			testID="pressible"
		>
			<View style={styles.innerContainer}>{content}</View>
		</Pressable>
	);
};

export default TodayHome;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		marginTop: 15,
		backgroundColor: COLORS.LightViolet,
		width: "100%",
	},
	innerContainer: {
		margin: 15,
		borderWidth: 5,
		borderColor: COLORS.PurpleBlue,
		borderRadius: 10,
		borderStyle: "dashed",
		alignItems: "center",
		minHeight: 200,
		justifyContent: "center",
	},
	statusText: {
		color: COLORS.PurpleBlue,
		textAlign: "center",
		fontWeight: "bold",
	},
	imgContainer: {
		width: "100%",
		height: "100%",
	},
	img: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.LightGray,
	},
	flex: {
		flex: 1,
	},
	todayFashion: {
		fontSize: FONTSIZE.Small,
		fontWeight: "bold",
		textAlign: "center",
	},
	textContainer: {
		backgroundColor: COLORS.LightMint,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.Mint,
		padding: 3,
		margin: 2,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
	},
});
```



```src\components\HomeWidgets\TodayHomeRealm.ts
import { LaundryDB } from "../../shared";
import { TodayClothes } from "../types";

export async function saveToRealm(data: TodayClothes[], realm: Realm) {
	console.log(data);

	data.forEach((e) => {
		let texture = 0;
		for (let element of e.texture) {
			if (
				/앙고라|니트|레이스|린넨|트위드|벨벳|울\/캐시미어|실크/i.test(element)
			) {
				texture = 1;
				break;
			}
		}

		realm.write(() => {
			realm.create(
				"LaundryDB",
				LaundryDB.generate(e.clothesId, e.clothesImgUrl, texture, new Date()),
			);
		});
	});
}
```



### inputs
```src\components\inputs\BorderBottomInput.tsx
import { StyleSheet, TextInput } from "react-native";
import { COLORS, FONTSIZE } from "../../shared/styles/STYLES";

interface Props {
	value: string;
	onChangeText: (text: string) => void;
	placeholder: string;
	secureTextEntry?: boolean;
}

const BorderBottomInput: React.FC<Props> = ({
	value,
	onChangeText,
	placeholder,
	secureTextEntry = false,
}) => {
	function handleChange(text: string) {
		onChangeText(text);
	}

	return (
		<TextInput
			secureTextEntry={secureTextEntry}
			style={styles.input}
			value={value}
			onChangeText={handleChange}
			placeholder={placeholder}
			testID="input"
		/>
	);
};

export default BorderBottomInput;

const styles = StyleSheet.create({
	input: {
		backgroundColor: COLORS.White,
		borderColor: COLORS.Black,
		borderBottomWidth: 1,

		fontSize: FONTSIZE.ExtraSmall,
		textAlign: "left",

		height: 40,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10,
		width: "auto",
	},
});
```



```src\components\inputs\ProfileInput.tsx
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONTSIZE } from "../../shared/styles/STYLES";

interface Props {
	value: string;
	onChangeText?: (text: string) => void;
	secureTextEntry?: boolean;
}

const ProfileInput: React.FC<Props> = ({ value, onChangeText }) => {
	function handleChange(text: string) {
		onChangeText!(text);
	}

	return (
		<View>
			{onChangeText ? (
				<TextInput
					style={[styles.common, styles.input]}
					value={value}
					onChangeText={handleChange}
					testID="input"
				/>
			) : (
				<View style={[styles.common, styles.textContainer]}>
					<Text style={styles.text}>{value}</Text>
				</View>
			)}
		</View>
	);
};

export default ProfileInput;

const styles = StyleSheet.create({
	common: {
		borderRadius: 10,

		fontSize: FONTSIZE.ExtraSmall,
		textAlign: "left",

		height: 40,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10,
	},
	input: {
		backgroundColor: COLORS.White,
		borderColor: COLORS.Gray,
		borderWidth: 1,
	},
	textContainer: {
		justifyContent: "center",
		backgroundColor: COLORS.LightGray,
	},
	text: {
		paddingHorizontal: 10,
		textAlign: "center",
	},
});
```


### laundryBasket
```src\components\laundryBasket\API.ts
import { API } from "../../shared";

interface LaundryDone {
	clothesIdList: number[];
	laundry: boolean;
}

export function laundryDone({ clothesIdList, laundry }: LaundryDone) {
	const data = {
		clothesIdList,
		laundry,
	};
	try {
		return API.put("clothes/laundry", data);
	} catch (error) {
		throw error;
	}
}
```



```src\components\laundryBasket\BasketModal.tsx
import { StyleSheet, Modal, Text, View, Pressable } from "react-native";
import { BasketProps } from "./LaundryBasket";
import { CENTER, COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import { StyledButton } from "../buttons";

interface Props extends BasketProps {
	modalVisible: boolean;
	hideModal(): void;
	doLandry(): void;
}

const BasketModal: React.FC<Props> = ({
	modalVisible,
	textures,
	hideModal,
	doLandry,
}) => {
	const laundryTip: Record<BasketProps["textures"], string[]> = {
		"기능성 소재": [
			"섬유유연제는 옷의 흡수력을 떨어뜨릴 수 있습니다.",
			"부드러운 세탁 모드나 찬물 세탁을 권장합니다.",
		],
		"울 / 캐시미어": [
			"부드러운 중성세제를 사용하고, 찬물로 헹구어야 합니다.",
			"세탁망을 이용하여 울 코스로 세탁해주세요",
		],
		"일반 세탁": [
			"기름이 포함된 음석의 얼룩은 주방세제를 사용하면 쉽게 지워집니다.",
			"다른 기능성 소재와 혼합되어 있는 경우 세탁법이 달라질 수 있으므로 라벨을 참고하는 것이 좋습니다.",
		],
	};

	function handleYes() {
		doLandry();
		hideModal();
	}

	const randomIndex = Math.floor(Math.random() * laundryTip[textures].length);

	return (
		<Modal transparent={true} visible={modalVisible}>
			<View style={styles.outerContainer}>
				<View style={[SHADOW, CENTER, styles.container]}>
					<Text style={styles.title}>세탁 완료</Text>
					<Text style={styles.content}>
						선택한 옷들을 세탁 완료 상태로 바꿉니다.
					</Text>
					<Text numberOfLines={1} style={styles.content}>
						{laundryTip[textures][randomIndex]}
					</Text>
					<View style={[ROW]}>
						<StyledButton title="세탁 완료" onPress={handleYes} />
						<StyledButton
							title="취소"
							onPress={hideModal}
							backgroundColor="CarrotRed"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default BasketModal;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	container: {
		borderWidth: 0.3,
		borderColor: COLORS.Gray,
		borderRadius: 15,
		marginVertical: "50%",
		width: "95%",
		backgroundColor: COLORS.White,
		paddingVertical: 20,
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	content: {
		fontSize: FONTSIZE.ExtraSmall,
		color: COLORS.Gray,
	},
	image: {
		marginVertical: 3,
		marginHorizontal: 5,
		width: 54,
		height: 180,
	},
	list: {
		width: 60,
		height: 190,
	},
});
```



```src\components\laundryBasket\DoLaundry.tsx
import {
	FlatList,
	Image,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { CENTER, COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import StyledButton from "../buttons/StyledButton";
import { useRealm } from "@realm/react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { saveToRealm } from "../HomeWidgets/TodayHomeRealm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodayClothes } from "../types";
import { useMutation } from "@tanstack/react-query";
import { laundryDone } from "./API";

interface Props {
	modalVisible: boolean;
	hideModal(): void;
}

const DoLaundry: React.FC<Props> = ({ modalVisible, hideModal }) => {
	const realm = useRealm();
	const [OOTD, setOOTD] = useState<TodayClothes[]>([]);

	const { mutate, isError, error, isPending } = useMutation({
		mutationFn: laundryDone,
		onSuccess: () => {
			saveToRealm(Array.from(selected), realm);
			setSelected(new Set());
		},
	});

	useEffect(() => {
		async function get() {
			const data = await AsyncStorage.getItem("todayWear");
			if (data) {
				setOOTD(JSON.parse(data));
			}
		}
		get();
	}, []);

	const [selected, setSelected] = useState<Set<TodayClothes>>(new Set(OOTD));

	async function moveToLaundryBasket() {
		if (!OOTD) return;
		const clothesIdList = OOTD.map((e) => e.clothesId);
		mutate({ clothesIdList, laundry: true });
		hideModal();
	}

	function handleSelect(item: TodayClothes) {
		if (selected.has(item)) {
			selected.delete(item);
			const deletedSet = new Set(selected);
			setSelected(deletedSet);
		} else {
			selected.add(item);
			const newSet = new Set(selected);
			setSelected(newSet);
		}
	}

	return (
		<Modal transparent={true} visible={modalVisible}>
			<View style={styles.outerContainer}>
				<View style={[SHADOW, styles.container]}>
					<FlatList
						horizontal
						style={styles.list}
						data={OOTD}
						renderItem={({ item }) => (
							<Pressable onPress={handleSelect.bind(this, item)} style={ROW}>
								<Image
									style={[SHADOW, styles.image]}
									source={{ uri: item.clothesImgUrl }}
								/>
								<FontAwesome
									name={selected.has(item) ? "check-circle-o" : "circle-o"}
									size={FONTSIZE.Medium}
								/>
							</Pressable>
						)}
						keyExtractor={(item) => item.clothesId.toString()}
					></FlatList>
					<View style={[CENTER]}>
						<Text style={styles.title}>귀가 완료</Text>
						<Text style={styles.content}>
							선택한 옷을 빨래 바구니에 넣으시겠어요?
						</Text>
					</View>
					<View style={[ROW]}>
						<StyledButton
							title="네"
							onPress={moveToLaundryBasket}
							backgroundColor="SkyBlue"
						></StyledButton>
						<StyledButton
							title="아니요"
							onPress={hideModal}
							backgroundColor="White"
						></StyledButton>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default DoLaundry;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	container: {
		borderWidth: 0.3,
		borderColor: COLORS.Gray,
		borderRadius: 15,
		marginVertical: "50%",
		width: "95%",
		backgroundColor: COLORS.White,
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	content: {
		fontSize: FONTSIZE.ExtraSmall,
		color: COLORS.Gray,
	},
	image: {
		marginVertical: 3,
		marginHorizontal: 5,
		width: 100,
		height: 180,
	},
	list: {
		height: 190,
	},
});
```



```src\components\laundryBasket\Laundries.tsx
import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { FONTSIZE, LaundryDB } from "../../shared";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / 3;

interface Props {
	laundry: LaundryDB;
	isSelected: boolean;
	onPress(clothesId: number): void;
}

const Laundries: React.FC<Props> = ({ laundry, isSelected, onPress }) => {
	return (
		<Pressable
			style={styles.container}
			onPress={() => onPress(laundry.clothesId)}
		>
			<Image style={styles.img} source={{ uri: laundry.clothesImgUrl }} />
			<FontAwesome
				name={isSelected ? "check-circle-o" : "circle-o"}
				size={FONTSIZE.Medium}
			/>
		</Pressable>
	);
};

export default Laundries;

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		resizeMode: "contain",
		width: itemWidth,
		aspectRatio: 1,
	},
});
```



```src\components\laundryBasket\LaundryBasket.tsx
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery, useRealm } from "@realm/react";
import { useNavigation } from "@react-navigation/native";

import { StyledButton } from "../buttons";
import Laundries from "./Laundries";
import { LaundryDB, ROW } from "../../shared";
import BasketModal from "./BasketModal";
import { useMutation } from "@tanstack/react-query";
import { laundryDone } from "./API";

export interface BasketProps {
	textures: "일반 세탁" | "울 / 캐시미어" | "기능성 소재";
}

const LaundryBasket: React.FC<BasketProps> = ({ textures }) => {
	const realm = useRealm();
	const navigation = useNavigation<Navigation>();

	const { mutate, isError, error, isPending } = useMutation({
		mutationFn: laundryDone,
		onSuccess: () => {
			setModalVisible(false);

			selectedLaundries.forEach((clothesId) => {
				const laundry = laundries.find((e) => e.clothesId === clothesId);
				console.log(laundry);
				realm.write(() => {
					realm.delete(laundry);
				});
			});

			navigation.pop();
		},
	});

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedLaundries, setSelectedLaundries] = useState<Set<number>>(
		new Set(),
	);

	const textureSelector = ["일반 세탁", "울 / 캐시미어", "기능성 소재"];
	const query = textureSelector.indexOf(textures);
	const laundries = useQuery(LaundryDB, (laundry) =>
		laundry.filtered("textures == $0", query),
	);

	function showModal() {
		setModalVisible(true);
	}

	function handleDoLaundry() {
		const clothesIdList = Array.from(selectedLaundries);
		mutate({ clothesIdList, laundry: false });
	}

	// function handleGotoCloset() {
	// 	selectedLaundries.forEach((laundry) => {
	// 		realm.write(() => {
	// 			realm.delete(laundry);
	// 		});
	// 	});
	// }

	function handleSelect(laundry: number) {
		if (selectedLaundries.has(laundry)) {
			selectedLaundries.delete(laundry);
			setSelectedLaundries(new Set(selectedLaundries));
		} else {
			setSelectedLaundries(new Set(selectedLaundries).add(laundry));
		}
	}

	return (
		<View>
			<BasketModal
				modalVisible={modalVisible}
				textures={textures}
				hideModal={setModalVisible.bind(null, false)}
				doLandry={handleDoLaundry}
			/>

			<FlatList
				style={styles.list}
				data={laundries}
				renderItem={({ item }) => (
					<Laundries
						laundry={item}
						onPress={handleSelect}
						isSelected={selectedLaundries.has(item.clothesId)}
					/>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
				numColumns={3}
			/>
			<Text style={styles.text}>
				세탁하기를 누르면 빨래 바구니의 옷들을 세탁 상태로 설정합니다.
			</Text>
			<View style={[ROW, styles.center]}>
				<StyledButton
					title="세탁하기"
					backgroundColor="SkyBlue"
					onPress={showModal}
				/>
				{/* <StyledButton
					title="옷장으로"
					backgroundColor="Turquoise"
					onPress={handleGotoCloset}
				/> */}
			</View>
		</View>
	);
};

export default LaundryBasket;

const styles = StyleSheet.create({
	containner: {
		justifyContent: "space-between",
	},
	list: {
		marginTop: 15,
	},
	text: {
		alignSelf: "center",
	},
	center: {
		justifyContent: "center",
	},
});
```



### managementMenuList
```src\components\managementMenuList\ManagementMenuList.tsx
import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";

import basket from "../../../assets/image/laundry_Basket.png";
import diary from "../../../assets/image/diary.png";

const ManagementMenuList = () => {
	const navigation = useNavigation<Navigation>();

	function handleLaundryPress() {
		navigation.navigate("laundryMain", { fromNoti: false });
	}

	function handleHistoryPress() {
		navigation.navigate("history");
	}
	return (
		<>
			<Menu
				title="빨래 바구니"
				onPress={handleLaundryPress}
				backgroundColor="PaleBlue"
				image={basket}
			/>
			<Menu
				title="옷 관리"
				onPress={handleHistoryPress}
				backgroundColor="PurpleBlue"
				image={diary}
			/>
		</>
	);
};

export default ManagementMenuList;
```



```src\components\managementMenuList\Menu.tsx
import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import { SHADOW, COLORS, FONTSIZE, ROW } from "../../shared";

interface Props {
	image: ReturnType<typeof require>;
	title: string;
	backgroundColor: keyof typeof COLORS;
	onPress(): void;
}

export const Menu: React.FC<Props> = ({
	image,
	title,
	backgroundColor,
	onPress,
}) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={[
					SHADOW,
					ROW,
					styles.container,
					{ backgroundColor: COLORS[backgroundColor] },
				]}
			>
				<Image style={styles.image} source={image} />
				<View style={styles.textContainer}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default Menu;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		marginVertical: 10,
		marginHorizontal: 5,
	},
	textContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		textAlign: "center",
	},
	image: {
		marginVertical: 15,
		width: 160,
		height: 160,
		resizeMode: "contain",
		flex: 1,
	},
});
```


### recentCoordyDetail
```src\components\recentCoordyDetail\API.ts
import { API } from "../../shared";
import { CoordyDetail } from "./types";

interface FetchDetailInterface {
	signal: AbortSignal;
	ootdId: number;
}

export async function fetchDetail({ signal, ootdId }: FetchDetailInterface) {
	return API.get(`ootd/${ootdId}`, { signal })
		.then((response) => response.data.data as CoordyDetail)
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
```



```src\components\recentCoordyDetail\DetailUI.tsx
import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

import { CoordyDetail } from "./types";
import { COLORS, FONTSIZE } from "../../shared";
import { useNavigation } from "@react-navigation/native";

const DetailUI: React.FC<CoordyDetail> = ({
	clothes,
	ootdImgUrl,
	createdAt,
}) => {
	const navigation = useNavigation<Navigation>();

	const originalDate = new Date(createdAt);
	const dateString = `${originalDate.getFullYear()}년 ${originalDate.getMonth() + 1}월 ${originalDate.getDate()}일`;

	function goToClothesDetail(clothesId: number) {
		navigation.navigate("1", { screen: "cloth", params: { id: clothesId } });
	}

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: ootdImgUrl }}
				style={styles.image}
				testID="detail-image"
			/>
			<Text style={styles.text}>{`${dateString}의 코디`}</Text>
			<View style={styles.horizontalLine} />
			<Text style={styles.title}>입었던 옷</Text>
			<FlatList
				style={styles.flatList}
				contentContainerStyle={{ flexGrow: 1 }}
				data={clothes}
				numColumns={2}
				renderItem={({ item }) => (
					<Pressable onPress={goToClothesDetail.bind(null, item.clothesId)}>
						<Image source={{ uri: item.clothesImgUrl }} style={styles.image} />
					</Pressable>
				)}
				keyExtractor={(item) => item.clothesId.toString()}
			></FlatList>
		</View>
	);
};

export default DetailUI;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "contain",
		borderWidth: 1,
		borderColor: COLORS.Gray,
		borderRadius: 10,
		margin: 5,
	},
	text: {
		fontSize: FONTSIZE.Medium,
		fontWeight: "400",
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	horizontalLine: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		width: "70%",
		margin: 10,
	},
	flatList: {
		// padding: 10,
	},
});
```




```src\components\recentCoordyDetail\RecentCoordyDetail.tsx
import { useQuery } from "@tanstack/react-query";

import { fetchDetail } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import DetailUI from "./DetailUI";

interface Props {
	ootdId: number;
}

const RecentCoordyDetail: React.FC<Props> = ({ ootdId }) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList", ootdId],
		queryFn: async ({ signal }) => fetchDetail({ signal, ootdId }),
	});

	return (
		<>
			{(isLoading || isError) && (
				<LoadingOrError isLoading={isLoading} isError={isError} error={error} />
			)}
			{data && <DetailUI {...data} />}
		</>
	);
};

export default RecentCoordyDetail;
```





```src\components\recentCoordyDetail\types.ts
export interface CoordyDetail {
	ootdId: number;
	ootdImgUrl: string;
	clothes: {
		clothesId: number;
		clothesImgUrl: string;
		lastWashDate: string;
		texture: string[];
		category: string[];
		item: string[];
		colors: string[];
		looks: string[];
		prints: string[];
	}[];
	createdAt: string;
}
```



### RecentCoordyList
```src\components\RecentCoordyList\API.ts
import { API } from "../../shared";
import { ClothesFetchListResponse } from "../types";

interface FetchRecentCoordyListInterface {
	signal: AbortSignal;
}
export async function fetchRecentCoordyListList({
	signal,
}: FetchRecentCoordyListInterface) {
	return API.get("ootd", { signal })
		.then((response) => response.data.data as ClothesFetchListResponse[])
		.catch((error) => {
			if (error.response) {
				throw new Error(error.response.data?.message ?? "네트워크 에러");
			}
			throw new Error("인터넷 연결을 확인해주세요.");
		});
}
```



```src\components\RecentCoordyList\RecentCoordyList.tsx
import { FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchRecentCoordyListList } from "./API";
import CoordiCard from "../coordyCard/CoordyCard";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const RecentCoordyList = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList"],
		queryFn: fetchRecentCoordyListList,
	});

	return (
		<>
			{(isLoading || isError) && (
				<LoadingOrError isLoading={isLoading} isError={isError} error={error} />
			)}
			{!isLoading && !isError && data?.length === 0 && (
				<Text>저장된 옷 기록이 없습니다.</Text>
			)}
			{data && (
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<CoordiCard {...item} widthMathToScreen={true} />
					)}
					keyExtractor={(item) => item.ootdImgUrl.toString()}
					numColumns={3}
				/>
			)}
		</>
	);
};

export default RecentCoordyList;
```



### signIn
```src\components\signIn\API.ts
import { API, useUser } from "../../shared";
import * as Keychain from "react-native-keychain";

interface FetchLoginInterface {
	account: string;
	password: string;
}

export async function fetchLogin({ account, password }: FetchLoginInterface) {
	const formData = new FormData();
	formData.append("account", account);
	formData.append("password", password);

	return API.post("login", formData, {
		headers: {
			"Content-Type": 'multipart/form-data; boundary="boundary"',
		},
	})
		.then(async ({ headers }) => {
			if (headers.authorization) {
				const token = headers.authorization;
				useUser.setState((state) => ({
					...state,
					accessToken: token,
				}));
				await Keychain.setInternetCredentials(
					"closeAtHand",
					"closeAtHand",
					token,
				);
				console.log("저장");
			}
			console.log("응답, 토큰", headers.authorization);
		})
		.catch((reject) => {
			console.log("로그인 실패", reject.message);
			throw new Error("로그인 실패");
		});
}
```



```src\components\signIn\SignIn.tsx
import { useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

import { BorderBottomInput, StyledButton } from "../buttons";
import { fetchLogin } from "./API";

const SignIn = () => {
	const navigation = useNavigation<Navigation>();
	const [accountId, setAccountId] = useState("");
	const [password, setPassword] = useState("");

	const { mutate } = useMutation({
		mutationFn: fetchLogin,
		onSuccess: () => {
			navigation.navigate("0", { screen: "home" });
		},
		onError: (error) => {
			Alert.alert(error.message, "아이디 또는 비밀번호를 다시 확인해주세요");
			setPassword("");
		},
	});

	function hanldeLogin() {
		if (!accountId || !password) {
			Alert.alert("입력 오류", "아이디 또는 비밀번호를 입력하세요");
			return;
		}
		mutate({ account: accountId, password });
	}

	function handleIdChange(input: string) {
		setAccountId(input.toLowerCase());
	}

	return (
		<>
			<BorderBottomInput
				onChangeText={handleIdChange}
				value={accountId}
				placeholder="아이디"
			/>
			<BorderBottomInput
				onChangeText={setPassword}
				value={password}
				placeholder="비밀번호"
				secureTextEntry={true}
			/>
			<StyledButton title="로그인" onPress={hanldeLogin} />
		</>
	);
};

export default SignIn;
```


### SignUp
```src\components\SignUp\API.ts
import { AxiosError } from "axios";
import { API } from "../../shared";

interface FetchSignUpInterface {
	account: string;
	password: string;
	userName: string;
}

export async function fetchSignUp({
	account,
	password,
	userName,
}: FetchSignUpInterface) {
	return API.post("user", { account, password, userName })
		.then(() => {
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("회원가입 실패");
		});
}

export async function fetchIdCheck(id: string) {
	try {
		const response = await API.get(`login/${id}`);
		return response.data.data as "Already exist" | "Available";
	} catch (error) {
		return new Error((error as AxiosError).message);
	}
}
```



```src\components\SignUp\UI.tsx
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../shared";

interface Props {
	children: ReactNode;
}

export const ErrorText: React.FC<Props> = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: COLORS.CarrotRed,
		textAlign: "center",
	},
});
```



### Statistics
```src\components\Statistics\API.ts
import { AxiosError } from "axios";
import { API } from "../../shared";
import { statistic } from "./type";

interface FetchMostclothesData {
	signal: AbortSignal;
}

export async function fetchMostClothes({ signal }: FetchMostclothesData) {
	try {
		const response = await API.get("statistics", { signal });
		return response.data.data as statistic;
	} catch (error) {
		throw new Error(
			(error as AxiosError).message ?? "인터넷 연결을 확인하세요",
		);
	}
}
```



```src\components\Statistics\Card.tsx
import { Image, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { MostClothes } from "./type";

interface Props extends MostClothes {
	onPress: (clothesId: Props["clothesId"]) => void;
}

const Card: React.FC<Props> = ({ clothesImgUrl, clothesId, onPress }) => {
	return (
		<Pressable
			style={styles.container}
			onPress={onPress.bind(this, clothesId)}
			testID={`test-${clothesId}`}
		>
			<Image style={styles.image} source={{ uri: clothesImgUrl }} />
		</Pressable>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		height: 240,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	image: {
		height: 240,
		width: 150,
		resizeMode: "cover",
		borderWidth: 0.8,
		borderColor: COLORS.Gray,
	},
});
```



```src\components\Statistics\constant.ts
import { statistic } from "./type";

export const placeholderData: statistic = { top5UsedClothes: [] };

for (let i = 0; i < 3; i++) {
	placeholderData.top5UsedClothes.push({
		clothesId: i,
		clothesImgUrl: " ",
	});
}
```



```src\components\Statistics\Statistics.tsx
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import Card from "./Card";
import { fetchMostClothes } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import { placeholderData } from "./constant";
import { FONTSIZE } from "../../shared";

interface Props {
	refreshing: boolean;
}

const MostClothes: React.FC<Props> = ({ refreshing }) => {
	const navigation = useNavigation<Navigation>();
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["mostclothes"],
		queryFn: fetchMostClothes,
		placeholderData,
	});

	useEffect(() => {
		refetch();
	}, [refreshing]);

	function hadlePress(clothesId: number) {
		navigation.navigate("1", { screen: "cloth", params: { id: clothesId } });
	}

	return (
		<View>
			{(isLoading || isError) && (
				<LoadingOrError error={error} isError={isError} isLoading={isLoading} />
			)}
			{data && data.top5UsedClothes ? (
				<FlatList
					horizontal={true}
					data={data.top5UsedClothes}
					renderItem={({ item }) => <Card {...item} onPress={hadlePress} />}
					keyExtractor={(item) => item.clothesId.toString()}
				/>
			) : (
				<Text style={styles.text}>저장된 데이터가 없습니다.</Text>
			)}
		</View>
	);
};

export default MostClothes;

const styles = StyleSheet.create({
	text: {
		fontSize: FONTSIZE.Medium,
		textAlign: "center",
	},
});
```



```src\components\Statistics\type.ts
export interface MostClothes {
	clothesId: number;
	clothesImgUrl: string;
}

export interface statistic {
	top5UsedClothes: MostClothes[];
}
```



## screens

```src\screens\index.ts
// 홈
export { default as HomeScreen } from "./home/HomeScreen";
export { default as LoginScreen } from "./home/LoginScreen";

// 옷장
export { default as ClosetMainScreen } from "./closet/ClosetMainScreen";
export { default as ClothInfoScreen } from "./closet/ClothInfoScreen";
export { default as CoordiPresetScreen } from "./closet/CoordiPresetScreen";

// 옷 관리
export { default as ManagementMainScreen } from "./management/ManagementMainScreen";
// 옷 관리 - 옷 기록
export { default as HistoryMainScreen } from "./management/HistoryMainScreen";
export { default as RecentCoordyListScreen } from "./management/RecentCoordyListScreen";
export { default as RecentCoordyDetailScreen } from "./management/RecentCoordyDetailScreen";

// 옷 관리 - 세탁
export { default as LandryMainScreen } from "./management/LandryMainScreen";
export { default as LaundryBasketScreen } from "./management/LaundryBasketScreen";

// 세팅
export { default as SettingsScreen } from "./settingsScreen/SettingsScreen";
export { default as AlarmScreen } from "./settingsScreen/AlarmScreen";
export { default as ProfileScreen } from "./settingsScreen/ProfileScreen";
export { default as BluetoothConnectionScreen } from "./settingsScreen/BluetoothConnectionScreen";
```


```src\screens\index.tsx
// 홈
export { default as HomeScreen } from "./home/HomeScreen";
// 옷장
export { default as ClosetScreen } from "./closet/ClosetScreen";
// 옷 관리
export { default as ManagementMainScreen } from "./management/ManagementMainScreen";
export { default as LandryMainScreen } from "./management/LandryMainScreen";
export { default as HistoryMainScreen } from "./management/HistoryMainScreen";
// 세팅
export { default as SettingsScreen } from "./settingsScreen/SettingsScreen";
// 온보딩
export { default as LoginScreen } from "./onboarding/LoginScreen";
export { default as ControllerScreen } from "./home/ControllerScreen";
```


### closet
```src\screens\closet\ClosetMainScreen.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

import { FONTSIZE, COLORS } from "../../shared";
// import API from "../../shared/axios/axios";

import ClosetScreen from "./ClosetScreen";
import CoordiScreen from "./CoordiScreen";

const ClosetMainScreen: React.FC <RootScreenProp<"closet">> = () => {
  // 최초화면은 옷장으로 설정
  const [selectedButton, setSelectedButton] = useState("closet");

    // 옷장화면 랜더링
    const handleClosetButtonClick = () => {
      setSelectedButton("closet");
    };
    // 코디화면 랜더링
    const handleCoordiButtonClick = () => {
      setSelectedButton("coordi");
    };

  return (
    <>
      <View style={styles.container}>    
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleClosetButtonClick} style={[styles.button, selectedButton === "closet" && styles.selectedButton]}>
            <Text style={styles.buttonText}>옷장</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCoordiButtonClick} style={[styles.button, selectedButton === "coordi" && styles.selectedButton]}>
            <Text style={styles.buttonText}>코디</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          {selectedButton === "closet" && (
            <ClosetScreen />
          )}
          {selectedButton === "coordi" && (
            <CoordiScreen />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    marginTop: 2,
  },
  button: {
    padding: 10,
    width: 100,
    borderColor: COLORS.CarrotRed,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: FONTSIZE.ExtraSmall,
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: COLORS.CarrotRed,
  },
});

export default ClosetMainScreen;
```



```src\screens\closet\ClosetScreen.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
// 컴포넌트 불러오기
import { SearchModal, ClosetItem } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// API
import { AxiosError } from "axios";
import { API } from "../../shared";

// 옷 인터페이스
interface ClothInfo {
  clothesId: number;
  clothesImgUrl: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

const ClosetScreen: React.FC = () => {
  // 임시데이터
  const [clothes, setClothes] = useState<ClothInfo[]>([]);
  const [recommendClothes, setRecommendedClothes] = useState<ClothInfo[][]>([]);
  // 검색 모달과 태그
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    // 서버로부터 옷 목록 데이터를 가져오는 API 호출
    const fetchClothesData = async () => {
      try {
        const response = await API.get("/clothes");
        setClothes(response.data.data);
        // 모든 태그를 선택하여 초기화
        const allTags = response.data.data.map((cloth: any) => {
          // 옷의 모든 속성에서 태그만 추출하여 배열로 반환
          return [
            ...cloth.texture,
            ...cloth.category,
            ...cloth.item,
            ...cloth.colors,
            ...cloth.looks,
            ...cloth.prints,
          ];
        });
        
        // 중복 제거 후 선택된 태그로 설정
        const uniqueTags = Array.from(new Set(allTags.flat()));
        setSelectedTags(uniqueTags);
      } catch (error) {
        console.error("옷 데이터가 없어용 ㅠ:", error as AxiosError);
      }
    };
    fetchClothesData();
      
    // 서버로부터 추천 옷 데이터를 가져오는 API 호출
    const fetchRecommendData = async () => {
      try {
        const response = await API.get("/recommend");
        setRecommendedClothes(response.data.data.recommendList);
      } catch (error) {
        console.error("추천 옷 받아오는 거 어렵워용 ㅠㅠ:", error as AxiosError);
      }
    };
    fetchRecommendData();
  }, []);


  // 검색 모달에서 선택된 태그를 받아옵니다.
  const handleSaveTags = (tags: any[]) => {
    setSelectedTags(tags);
  };

  // 모달의 현재 상태
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // 추천 옷 리스트
  const RenderRecommendedClothes: React.FC = () => {
    return (
      <ScrollView horizontal style={styles.recommendedDiv}>
        {recommendClothes.flat().map((item) => (
          <ClosetItem key={item.clothesId} {...item} />
        ))}
      </ScrollView>
    );
  };

  // 옷장화면 옷 리스트 구성
  const RenderClothes: React.FC = () => {
    const filteredClothes = clothes.filter((cloth) => {
      // 선택된 태그와 옷의 속성을 비교하여 필터링합니다.
      return selectedTags.some((tag) => {
        // 각 옷의 속성을 가져옵니다.
        const { texture, category, item, colors, looks, prints } = cloth;
        // 선택된 태그와 옷의 속성을 비교하여 필터링합니다.
        return (
          texture.includes(tag) || 
          category.includes(tag) ||
          item.includes(tag) ||
          colors.includes(tag) ||
          looks.includes(tag) ||
          prints.includes(tag)
        );
      });
    });

        // 필터링된 옷이 없는 경우 알림창을 표시하는 로직 추가
    if (filteredClothes.length === 0 || selectedTags.length === 0) {
      return (
        <View>
          <Text style={styles.alertText}>선택된 옷이 없습니다. 다른 태그를 선택해주세요.</Text>
        </View>
      );
    };

    return (
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        data={filteredClothes}
        renderItem={({ item }) => <ClosetItem key={item.clothesId} {...item} />}
        keyExtractor={(item) => item.clothesId.toString()}
      />
    );
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.recommendlistDiv}>
        <View style={styles.header}>
          <Text style={styles.recommendedTitle}>오늘의 추천 옷</Text>
          {/* 검색 버튼 */}
          <TouchableOpacity>
            <SearchModal
              onClose={toggleModal}
              onTagsSelected={handleSaveTags} 
            />
          </TouchableOpacity>
        </View>
        {/* 추천 옷 */}
        <RenderRecommendedClothes />
      </View>
      {/* 옷 리스트 */}
      <View style={styles.clotheslistDiv}>
        <Text style={styles.clothesTitle}>옷장</Text>
        <RenderClothes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendlistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  alertText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    fontSize: FONTSIZE.Medium,
    color: COLORS.Blue,
  },
  recommendedTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  clotheslistDiv: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
  },
  clothesTitle: {
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
  },
  recommendedDiv: {
    borderColor: COLORS.CarrotRed,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  flatListContent: {
    marginLeft: '5%',
    flexGrow: 1,
  },
});

export default ClosetScreen;
```



```src\screens\closet\ClothInfoScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// 컴포넌트
import { FONTSIZE, COLORS } from "../../shared";
// API
// import { AxiosError } from "axios";
import { API } from "../../shared";

interface ClothInfo {
  clothesId: number,
  clothesImgUrl: string,
  lastWashDate: string,
  texture: string[],
  category: string[],
  item: string[],
  colors: string[],
  looks: string[],
  prints: string[],
}

const ClothInfoScreen: React.FC<{ route: any }> = ({ route }) => {
  const clothId = route.params.id;
  const [clothesInfo, setClothesInfo] = useState<ClothInfo | null>(null);

  useEffect(() => {
    const fetchClothInfo = async () => {
      try {
        const response = await API.get(`clothes/${clothId}`);
        if (response.data.result === "SUCCESS") {
          const clothData = response.data.data;
          setClothesInfo(clothData);
        } else {
          console.error("옷 정보를 받아오지 못했어요... 서버 나빠!");
        }
      } catch (error) {
        console.error("오류:", error);
      }
    };
    fetchClothInfo();
  }, [clothId]);

  return (
    <>
    {clothesInfo ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: clothesInfo.clothesImgUrl }} style={styles.image} />
      </View>
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.infoText}>종류: {clothesInfo.category.join(', ')}</Text>
        <Text style={styles.infoText}>색상: {clothesInfo.colors.join(', ')}</Text>
        <Text style={styles.infoText}>아이템: {clothesInfo.item.join(', ')}</Text>
        <Text style={styles.infoText}>룩: {clothesInfo.looks.join(', ')}</Text>
        <Text style={styles.infoText}>프린트: {clothesInfo.prints.join(', ')}</Text>
        <Text style={styles.infoText}>마지막 세탁일: {clothesInfo.lastWashDate}</Text>
      </ScrollView>
    </View>
    ) : (
      <View>
        <Text>옷 정보를 가져오는 중입니다...</Text>
      </View>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    height: '65%',
  },
  image: {
    width: "100%",
    height: "100%", // 이미지 크기 조절
    resizeMode: 'contain', // 이미지를 원하는 크기로 조정
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: FONTSIZE.Medium, // 폰트 크기 조절
    color: COLORS.Black, // 폰트 색상 조절
    borderBottomWidth: 1, // border-bottom-line 추가
    borderBottomColor: COLORS.Gray, // border-bottom-line 색상 조절
    marginBottom: 5,
  },
});

export default ClothInfoScreen;
```



```src\screens\closet\CoordiPresetScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// 컴포넌트
import { AddPreset, AddImage } from "../../components";
import { FONTSIZE, COLORS } from "../../shared";
// API
import { AxiosError } from 'axios';
import { API } from '../../shared/';

interface Clothes {
  clothesId: number;
  clothesImgUrl: string;
  lastWashDate: string;
  texture: string[];
  category: string[];
  item: string[];
  colors: string[];
  looks: string[];
  prints: string[];
}

interface PresetInfo {
  presetId: number;
  presetImgUrl: string;
  presetName: string;
  clothes: Clothes[];
}

const CoordiPresetScreen: React.FC<{ route: any }> = ({ route }) => {
  const presetId = route.params.id;
  const [presetInfo, setPresetInfo] = useState<PresetInfo | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<Navigation>();
  const [isUpdate, setisUpdate] = useState(0);
  const [imageModalVisible, setimageModalVisible] = useState(false);

  // 옷 추가 모달
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  // 이미지 추가 모달
  const toggleImageModal = () => {
    setimageModalVisible(!imageModalVisible);
  }

  useEffect(() => {
    const fetchPresetInfo = async () => {
      try {
        const response = await API.get(`preset/${presetId}`);
        const data = response.data.data;
        setPresetInfo(data);
      } catch (error) {
        console.error("받아오는 데이터에 문제가 있네요ㅠ:", error);
      }
    };
    fetchPresetInfo();
  }, [presetId, isUpdate]);

  // 옷 상세정보
  const handleClothItemPress = (clothesId: number) => {
    navigation.navigate('cloth', { id: clothesId });
  };

  // 옷 삭제 
  const handleDeleteCloth = async (index: number) => {
    try {
      const updatedClothes = [...presetInfo!.clothes];
      updatedClothes.splice(index, 1);
      setPresetInfo(prevState => ({
        ...prevState!,
        clothes: updatedClothes,
      }));

      // 옷이 지워진 후 서버로 요청
      const clothesIdList = [presetInfo!.clothes[index].clothesId];
      const requestData = {
        presetId: presetInfo!.presetId,
        clothesIdList: clothesIdList,
      };

      const response = await API.put('/preset/pop', requestData)

      if (response.data.result === "SUCCESS") {
        console.log("서버에서 옷 삭제 요청이 성공적으로 처리되었습니다.");
      } else {
        console.error("서버에서 옷 삭제 요청 처리 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("서버에 옷 삭제 요청을 보내는 중 오류가 발생했습니다:", error);
    }
  };

  function update() {
    setisUpdate(prev => prev+1)
  }

  return (
    <>
      {presetInfo ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <AddImage
              onClose={toggleImageModal} 
              presetId={presetId}
              // presetName={presetName}
              setisUpdate={update}
              />
            <Image source={{ uri: presetInfo.presetImgUrl }} style={styles.image} />
          </View>
          <ScrollView style={styles.infoContainer}>
            {presetInfo.clothes.map((clothes, index) => (
              <TouchableOpacity key={index} style={styles.infoItem} onPress={() => handleClothItemPress(clothes.clothesId)}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCloth(index)}>
                  <Text style={styles.deleteButtonText}>삭제</Text>
                </TouchableOpacity>
                <View style={styles.infoImageContainer}>
                  <Image style={styles.infoImg} source={{ uri: clothes.clothesImgUrl }} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoText}>텍스처: {clothes.texture.join(', ')}</Text>
                  <Text style={styles.infoText}>아이템: {clothes.item.join(', ')}</Text>
                  <Text style={styles.infoText}>색상: {clothes.colors.join(', ')}</Text>
                  <Text style={styles.infoText}>룩: {clothes.looks.join(', ')}</Text>
                  <Text style={styles.infoText}>프린트: {clothes.prints.join(', ')}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <AddPreset
              onClose={toggleModal} 
              presetId={presetId}
              setisUpdate={update}
              />
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>옷 정보를 가져오는 중입니다...</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  imageButton: {
    width: 40,
    height: 30,
    borderRadius: 5,
    backgroundColor: COLORS.White,
    alignItems: "center",
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    borderColor: COLORS.Black,
    borderWidth: 1,
  },
  imageButtonText: {
    color: COLORS.PurpleBlue,
    fontSize: FONTSIZE.ExtraSmall,
    zIndex: 2,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%", // 이미지 크기 조절
  },
  infoContainer: {
    flex: 2,
  },
  infoItem: {
    flexDirection: 'row', // 가로로 배치되도록 설정
    alignItems: "center",
    borderColor: COLORS.Mint,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: COLORS.CarrotRed,
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  deleteButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.Small,
  },
  infoImageContainer: {
    flex: 1, // 왼쪽 1/3 공간을 차지하도록 설정
    marginRight: 10, // 이미지와 텍스트 사이의 간격 조절
  },
  infoImg: {
    width: '100%', // 이미지를 컨테이너의 가로 길이에 맞게 조정
    height: 120, // 이미지의 높이 설정 (원하는 크기로 변경 가능)
    borderRadius: 5, // 이미지에 테두리를 둥글게 만듭니다.
    resizeMode: 'contain', // 이미지를 원하는 크기로 조정
  },
  infoTextContainer: {
    flex: 2, // 오른쪽 2/3 공간을 차지하도록 설정
  },
  infoText: {
    fontSize: FONTSIZE.ExtraSmall, // 폰트 크기 조절
    color: COLORS.Black, // 폰트 색상 조절
    borderBottomWidth: 1, // border-bottom-line 추가
    borderBottomColor: COLORS.Gray, // border-bottom-line 색상 조절
    marginBottom: 5,
    marginLeft: 2,
  },
});

export default CoordiPresetScreen;
```



```src\screens\closet\CoordiScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// 컴포넌트 불러오기
import { COLORS, FONTSIZE } from '../../shared/';
import { PresetItem, NewPreset } from '../../components';
// API
import { AxiosError } from 'axios';
import { API } from '../../shared/';

interface presetItem {
  presetId: number;
  presetImgUrl: string;
  presetName: string;
  clothes: {
    clothesId: number;
    clothesImgUrl: string;
    lastWashDate: string;
    texture: string[];
    category: string[];
    item: string[];
    colors: string[];
    looks: string[];
    prints: string[];
  }[];
}

const CoordiScreen: React.FC = () => {
  const [presets, setPresets] = useState<presetItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<Navigation>();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    // 서버로부터 프리셋 목록 데이터를 가져오는 API 호출
    const fetchPresetData = async () => {
      try {
        const response = await API.get("/preset");
        setPresets(response.data.data);
      } catch (error) {
        console.error("에러메시지:", error as AxiosError);
      }
    };
    fetchPresetData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프리셋 목록</Text>
      </View>
      <View>
        <TouchableOpacity>
          <NewPreset 
            onClose={toggleModal}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={presets}
        renderItem={({ item }) => <PresetItem presetId={item.presetId} presetName={item.presetName} clothes={item.clothes} />} // 수정된 부분
        keyExtractor={(item) => item.presetId.toString()}
        contentContainerStyle={{flexGrow:1}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '5%',
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: FONTSIZE.Medium,
    fontWeight: 'bold',
  },
});

export default CoordiScreen;
```


### home
```src\screens\home\HomeScreen.tsx
// src/screens/home/HomeScreen.tsx
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { HomeInfo, MirrorConnection, TodayHome } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen: React.FC<RootNavigationProp> = ({ navigation }) => {
	const insets = useSafeAreaInsets();

	return (
		<ScrollView
			style={[
				styles.container,
				// headerShwon을 false로 지정하여 safeArea를 조정해야 한다.
				{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
			]}
		>
			<MirrorConnection />
			<TodayHome />
			<HomeInfo />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
});

export default HomeScreen;
```



```src\screens\home\LoginScreen.tsx
import { StyleSheet, View } from "react-native";
import { SignUp, SignIn, TextButton } from "../../components";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useToken } from "../../shared";

const LoginScreen = () => {
	const navigation = useNavigation<Navigation>();

	const [signUpTry, setSignUpTry] = useState(false);
	const token = useToken();

	useEffect(() => {
		if (token) {
			navigation.replace("home");
		}
	}, [token]);

	function hanldePress() {
		setSignUpTry((prev) => !prev);
	}

	return (
		<View style={styles.container}>
			{signUpTry ? (
				<SignUp setSignUpTry={setSignUpTry} data-testID="sign-up" />
			) : (
				<SignIn data-testID="sign-in" />
			)}
			<TextButton
				text={
					signUpTry ? "이미 회원이신가요?" : "아직 회원가입을 하지 않으셨나요?"
				}
				onPress={hanldePress}
			/>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
```



### management
```src\screens\management\HistoryMainScreen.tsx
import {
	Pressable,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ClothesHistoryList, MostClothes } from "../../components/";
import { FONTSIZE, ROW } from "../../shared";
import { useState } from "react";

const HistoryMainScreen = () => {
	const navigation = useNavigation<Navigation>();
	const [refreshing, setRefreshing] = useState(false);

	function handleRecentPress() {
		navigation.navigate("recentCoordyList");
	}

	function onRefresh() {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<View style={[ROW, styles.titleContainer]}>
				<Text style={styles.text}>최근 코디</Text>
				<Pressable onPress={handleRecentPress}>
					<Ionicons name="albums-sharp" size={FONTSIZE.Medium} color="black" />
				</Pressable>
			</View>
			<ClothesHistoryList refreshing={refreshing} />
			<View style={[ROW, styles.titleContainer]}>
				<Text style={styles.text}>이번 달 가장 많이 입은 옷</Text>
			</View>
			<MostClothes refreshing={refreshing} />
		</ScrollView>
	);
};

export default HistoryMainScreen;

const styles = StyleSheet.create({
	titleContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 15,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		fontWeight: "bold",
	},
});
```


```src\screens\management\LandryMainScreen.tsx
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { LaundryButton } from "../../components";
import { CENTER, COLORS, FONTSIZE, ROW } from "../../shared";
import { DoLaundry } from "../../components";

import form from "../../../assets/image/foam.png";
import basket from "../../../assets/image/laundry_Basket.png";

const LandryMainScreen: React.FC<RootScreenProp<"laundryMain">> = ({
	navigation,
	route,
}) => {
	const [modalVisible, setModalVisible] = useState(
		route.params?.fromNoti ?? false,
	);

	useEffect(() => {
		const { fromNoti } = route.params;

		setModalVisible(fromNoti);
	}, [route.params]);

	function putLaundry() {
		navigation.navigate("laundryMain", {
			fromNoti: true,
		});
	}

	function handleButtonPress(
		basket: "일반 세탁" | "울 / 캐시미어" | "기능성 소재",
	) {
		navigation.navigate("2", { screen: "laundryBasket", params: { basket } });
	}

	return (
		<View>
			<DoLaundry
				hideModal={setModalVisible.bind(null, false)}
				modalVisible={modalVisible}
			/>
			<View style={[ROW, styles.center]}>
				<Image style={styles.image} source={form} />
				<LaundryButton
					title="일반 세탁"
					bubble1={true}
					onPress={handleButtonPress}
				/>
			</View>
			<View style={[ROW, styles.center]}>
				<LaundryButton
					title="울 / 캐시미어"
					bubble1={true}
					onPress={handleButtonPress}
				/>
				<LaundryButton
					title="기능성 소재"
					bubble1={false}
					onPress={handleButtonPress}
				/>
			</View>
			<Pressable onPress={putLaundry} style={[CENTER]}>
				<View
					style={[styles.overlayText, styles.laundryButtonContainer, CENTER]}
				>
					<Text style={[styles.overlayText, styles.laundryButtonText, CENTER]}>
						{"오늘 입은 옷 넣기"}
					</Text>
				</View>
				<Image style={styles.laundryBasket} source={basket} />
			</Pressable>
		</View>
	);
};

export default LandryMainScreen;

const styles = StyleSheet.create({
	center: {
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 10,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		zIndex: 999,
	},
	image: {
		height: 170,
		width: 170,
		resizeMode: "contain",
	},
	laundryBasket: {
		alignSelf: "center",
	},
	laundryButtonText: {
		fontSize: FONTSIZE.ExtarLarge,
		backgroundColor: COLORS.CarrotRedRipple,
	},
	laundryButtonContainer: {
		opacity: 0.8,
		borderRadius: 10,
	},
});
```


```src\screens\management\LaundryBasketScreen.tsx
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FONTSIZE } from "../../shared";
import { LaundryBasket } from "../../components";

import bubble from "../../../assets/image/bubble.png";

const LaundryBasketScreen: React.FC<RootScreenProp<"laundryBasket">> = ({
	navigation,
	route,
}) => {
	const textures = route.params.basket;

	useEffect(() => {
		navigation.setOptions({ headerTitle: textures });
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.bubbleContainer}>
				<Text style={styles.overlayText}>{textures}</Text>
				<Image source={bubble} />
				<View style={styles.imageContainer}></View>
			</View>
			<LaundryBasket textures={textures} />
		</View>
	);
};

export default LaundryBasketScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
	},
	bubbleContainer: {
		alignItems: "center",
		marginTop: 30,
	},
	overlayText: {
		position: "absolute",
		flex: 1,
		alignSelf: "center",
		marginTop: "8%",
		zIndex: 999,
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	imageContainer: {
		justifyContent: "space-around",
	},
});
```



```src\screens\management\ManagementMainScreen.tsx
import { View, StyleSheet } from "react-native";
import { ManagementMenuList } from "../../components";

const ManagementScreen = () => {
	return (
		<View style={styles.conatiner}>
			<ManagementMenuList />
		</View>
	);
};

export default ManagementScreen;

const styles = StyleSheet.create({
	conatiner: {
		marginTop: 60,
	},
});
```


```src\screens\management\ManagementScreen.tsx
import { StyleSheet } from "react-native";

const ManagementScreen = () => {
	return <></>;
};

export default ManagementScreen;

const styles = StyleSheet.create({});
```



```src\screens\management\RecentCoordyDetailScreen.tsx
import { RecentCoordyDetail } from "../../components";

const RecentCoordyDetailScreen: React.FC<
	RootScreenProp<"recentCoordyDetail">
> = ({ route }) => {
	return <RecentCoordyDetail ootdId={route.params.ootdId} />;
};

export default RecentCoordyDetailScreen;
```


```src\screens\management\RecentCoordyListScreen.tsx
import { RecentCoordyList } from "../../components";

const RecentCoordyListScreen = () => {
	return <RecentCoordyList />;
};

export default RecentCoordyList;
```



### settingScreen
```src\screens\settingsScreen\AlarmScreen.tsx
import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, FONTSIZE, ROW } from "../../shared";

interface ListItemProps {
	title: string;
	isEnabled: boolean;
	onChange(): void;
}

let INITIAL_VALUE = {
	CloseAtHandHomeAlarm: true,
	CloseAtHandLaundryAlarm: false,
	CloseAtHandClothesAlarm: false,
	CloseAtHandAirDresserAlarm: false,
};

async function getStorageItem() {
	const storageJson = await AsyncStorage.getItem("CloseAtHandNotifications");
	return storageJson
		? (JSON.parse(storageJson) as typeof INITIAL_VALUE)
		: INITIAL_VALUE;
}

const ListItem: React.FC<ListItemProps> = ({ title, isEnabled, onChange }) => {
	return (
		<View style={[ROW, styles.listContainer]}>
			<Ionicons
				name={isEnabled ? "notifications-circle" : "notifications-off-circle"}
				size={FONTSIZE.Medium}
				color={COLORS.Black}
			/>
			<Text style={styles.text}>{title}</Text>
			<Switch
				style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
				trackColor={{ false: COLORS.Gray, true: COLORS.Blue }}
				thumbColor={COLORS.LightGray}
				onValueChange={onChange}
				value={isEnabled}
			/>
		</View>
	);
};

const AlarmScreen = () => {
	const [notifications, setNotifications] = useState(INITIAL_VALUE);

	useEffect(() => {
		const fetchInitialValue = async () => {
			try {
				const storageJson = await AsyncStorage.getItem(
					"CloseAtHandNotifications",
				);
				const storedSettings = JSON.parse(storageJson ?? "") || {};
				setNotifications({ ...notifications, ...storedSettings });
			} catch (error) {
				console.log(error);
			}
		};
		fetchInitialValue();
	}, []);

	async function handleChange(changeTarget: keyof typeof INITIAL_VALUE) {
		const newNotifications = JSON.stringify({
			...notifications,
			[changeTarget]: !notifications[changeTarget],
		});
		AsyncStorage.setItem("CloseAtHandNotifications", newNotifications);
		setNotifications(await getStorageItem());
	}

	return (
		<View>
			<ListItem
				title="귀가 후 세탁 알림"
				isEnabled={notifications.CloseAtHandHomeAlarm}
				onChange={handleChange.bind(this, "CloseAtHandHomeAlarm")}
			/>
			<ListItem
				title="세탁물 포화 알림"
				isEnabled={notifications.CloseAtHandLaundryAlarm}
				onChange={handleChange.bind(this, "CloseAtHandLaundryAlarm")}
			/>
			<ListItem
				title="옷 등록 알림"
				isEnabled={notifications.CloseAtHandClothesAlarm}
				onChange={handleChange.bind(this, "CloseAtHandClothesAlarm")}
			/>
			<ListItem
				title="에어드레서 사용 알림"
				isEnabled={notifications.CloseAtHandAirDresserAlarm}
				onChange={handleChange.bind(this, "CloseAtHandAirDresserAlarm")}
			/>
		</View>
	);
};

export default AlarmScreen;

const styles = StyleSheet.create({
	listContainer: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.Gray,
		paddingVertical: 15,
		paddingHorizontal: 10,
		alignItems: "center",
		marginHorizontal: 10,
		marginVertical: 5,
	},
	text: {
		fontSize: FONTSIZE.Medium,
		marginLeft: 15,
		marginBottom: 10,
		flex: 1,
	},
});
```



```src\screens\settingsScreen\BluetoothConnectionScreen.tsx
import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import {
	COLORS,
	FONTSIZE,
	requestAccessFineLocationPermission,
	startDiscovery,
	cancelDiscovery,
	PairDevices,
	CENTER,
} from "../../shared";

import { StyledButton } from "../../components";

import bluetoothSearching from "../../../assets/image/bluetoothSearching.png";

const BluetoothConnectionScreen: React.FC<RootNavigationProp> = ({
	navigation,
}) => {
	const [isScanned, setIsScanned] = useState(false);
	const [isDeviceFound, setIsDeviceFound] = useState(false);

	async function startScan() {
		setIsScanned(false);
		const address = await startDiscovery();
		const device = await PairDevices(address);
		setIsScanned(true);
		if (device) {
			setIsDeviceFound(true);
		}
	}

	function pressFoundButton() {
		navigation.pop();
	}

	useEffect(() => {
		async function permission() {
			const result = await requestAccessFineLocationPermission();
			console.debug("권한 요청 결과", result);
			if (!result) return;
			await startScan();
		}

		permission();

		return () => {
			cancelDiscovery();
		};
	}, []);

	return (
		<View style={styles.container}>
			{isScanned ? (
				<>
					<Text style={[styles.title, styles.textCenter]}>검색 종료</Text>
					<View style={styles.imageContainer}>
						<Image source={bluetoothSearching}></Image>
					</View>
					{isDeviceFound ? (
						<>
							<Text style={[CENTER, styles.text]}>
								연결 완료 이전 화면으로 이동하려면 다음 버튼을 누르세요
							</Text>
							<StyledButton title="검색 완료" onPress={pressFoundButton} />
						</>
					) : (
						<Text style={[styles.text, styles.textCenter]}>
							{"클로젯 핸드를 찾을 수 없습니다."}
						</Text>
					)}
					<StyledButton title="다시 검색" onPress={startScan} />
				</>
			) : (
				<>
					<Text style={[styles.title, styles.textCenter]}>
						주변의 기기를 검색 중입니다.
					</Text>
					<View style={styles.imageContainer}>
						<Image source={bluetoothSearching}></Image>
					</View>
					<Text style={[styles.text, styles.textCenter]}>
						{
							"블루투스와 클로젯 핸드를 켜주시고 잠시 기다려 주세요. \n 약 10초에서 15초정도의 시간이 소요됩니다."
						}
					</Text>
				</>
			)}
		</View>
	);
};

export default BluetoothConnectionScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		color: COLORS.Turquoise,
		fontSize: FONTSIZE.ExtarLarge,
		marginVertical: 4,
	},
	imageContainer: {
		alignItems: "center",
		marginVertical: 10,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
		marginVertical: 5,
	},
	textCenter: {
		textAlign: "center",
	},
});
```



```src\screens\settingsScreen\ProfileScreen.tsx
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import { ProfileInput, StyledButton } from "../../components";
import { FONTSIZE, ROW } from "../../shared";

import img from "../../../assets/image/foam.png";

const gender = "남성";
const id = "myIdentifier";

const ProfileScreen = () => {
	const [nickname, setNickname] = useState("");
	const [height, setHeight] = useState("");

	function handleChangeImage() {
		// 사진 바꾸는 로직
	}

	function handleSubmit() {
		// 저장 누르면
	}

	async function hadnleWifi() {
		Alert.alert(
			"자택 와이파이 설정",
			"현재 연결된 와이파이를 자택 와이파이로 설정합니다.",
			[
				{
					text: "재설정",
					onPress: () => console.log("재설정 누름"),
					style: "cancel",
				},
				{ text: "취소", onPress: () => console.log("취소") },
			],
			{ cancelable: true },
		);
	}

	return (
		<View style={styles.main}>
			<View style={styles.main}>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Image style={styles.img} source={img} />
						<StyledButton
							title="프로필 사진 변경"
							backgroundColor="CarrotRed"
							onPress={handleChangeImage}
						/>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>닉네임</Text>
						<ProfileInput
							onChangeText={(text) => {
								setNickname(text);
							}}
							value={nickname}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>성별</Text>
						<ProfileInput value={gender} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>키 (신장)</Text>
						<ProfileInput
							onChangeText={(text) => {
								setHeight(text);
							}}
							value={height}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>가입 아이디</Text>
						<ProfileInput value={id} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>자택 와이파이</Text>
						<StyledButton
							title="자택 와이파이 재설정"
							backgroundColor="White"
							onPress={hadnleWifi}
						/>
						<Text></Text>
					</View>
				</View>
			</View>
			<StyledButton onPress={handleSubmit} title="저장하기" />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginTop: 30,
	},
	margin: {
		marginVertical: 15,
	},
	container: {
		flex: 1,
	},
	img: {
		height: 150,
		resizeMode: "contain",
		alignSelf: "center",
	},
	text: {
		textAlign: "center",
		fontSize: FONTSIZE.ExtraSmall,
		fontWeight: "bold",
	},
});
```



```src\screens\settingsScreen\ProfileScreen.tsx
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import { ProfileInput, StyledButton } from "../../components";
import { FONTSIZE, ROW } from "../../shared";

import img from "../../../assets/image/foam.png";

const gender = "남성";
const id = "myIdentifier";

const ProfileScreen = () => {
	const [nickname, setNickname] = useState("");
	const [height, setHeight] = useState("");

	function handleChangeImage() {
		// 사진 바꾸는 로직
	}

	function handleSubmit() {
		// 저장 누르면
	}

	async function hadnleWifi() {
		Alert.alert(
			"자택 와이파이 설정",
			"현재 연결된 와이파이를 자택 와이파이로 설정합니다.",
			[
				{
					text: "재설정",
					onPress: () => console.log("재설정 누름"),
					style: "cancel",
				},
				{ text: "취소", onPress: () => console.log("취소") },
			],
			{ cancelable: true },
		);
	}

	return (
		<View style={styles.main}>
			<View style={styles.main}>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Image style={styles.img} source={img} />
						<StyledButton
							title="프로필 사진 변경"
							backgroundColor="CarrotRed"
							onPress={handleChangeImage}
						/>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>닉네임</Text>
						<ProfileInput
							onChangeText={(text) => {
								setNickname(text);
							}}
							value={nickname}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>성별</Text>
						<ProfileInput value={gender} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>키 (신장)</Text>
						<ProfileInput
							onChangeText={(text) => {
								setHeight(text);
							}}
							value={height}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>가입 아이디</Text>
						<ProfileInput value={id} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>자택 와이파이</Text>
						<StyledButton
							title="자택 와이파이 재설정"
							backgroundColor="White"
							onPress={hadnleWifi}
						/>
						<Text></Text>
					</View>
				</View>
			</View>
			<StyledButton onPress={handleSubmit} title="저장하기" />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginTop: 30,
	},
	margin: {
		marginVertical: 15,
	},
	container: {
		flex: 1,
	},
	img: {
		height: 150,
		resizeMode: "contain",
		alignSelf: "center",
	},
	text: {
		textAlign: "center",
		fontSize: FONTSIZE.ExtraSmall,
		fontWeight: "bold",
	},
});
```



```src\screens\settingsScreen\SettingsScreen.tsx
import { StyleSheet, Text, View } from "react-native";

import Img from "../../../assets/image/LogoDesign.svg";

import { COLORS, FONTSIZE } from "../../shared";
import { SettingsButton } from "../../components";

const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Close at Hand</Text>
			<View style={styles.imageContainer}>
				<Img width={100} height={100} />
			</View>
			<View style={styles.buttonContainer}>
				<SettingsButton name="bluetooth" title="클로젯 핸드 연결하기" />
				<SettingsButton name="alarm" title="알람 설정" />
				<SettingsButton name="profile" title="회원 정보" />
			</View>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	text: {
		fontSize: FONTSIZE.ExtarLarge,
		color: COLORS.PurpleBlue,
		textAlign: "center",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		marginTop: 50,
		backgroundColor: COLORS.PaleBlue,
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: 20,
	},
});
```


## shared
```src\shared\index.ts
// Axios
export { API } from "./axios/axios";

// Tanstack QUery
export { queryClient } from "./tanstackquery/tanstackQuery";

// zustand
export {
	useUser,
	useToken,
	useRefreshToken,
	useNickName,
	useUserActions,
} from "./zustand/userStore";

export { useMirror } from "./zustand/MirroeStore";

// realm
export { LaundryDB } from "./realm/realm";

// styleSheet
export { SHADOW, ROW, CENTER } from "./styles/commonStyleSheet";

// constant
export { COLORS, FONTSIZE } from "./styles/STYLES";

// notifee
export {
	getNotificationPermission,
	notification,
	scheduleDailyAlarm,
	NotificationType,
} from "./notifee/notifee";

//
export {
	requestAccessFineLocationPermission,
	startDiscovery,
	cancelDiscovery,
	PairDevices,
	dataSendToDevice,
} from "./bluetooth/bluetoothClassic";
```


### axios
```src\shared\axios\axios.ts
import axios from "axios";
import { useUser } from "../zustand/userStore";

const URL = process.env.API_URL;
export const API = axios.create({
	baseURL: URL,
	withCredentials: true,
});

API.interceptors.request.use(function (config) {
	console.log("요청", config);
	config.headers.Authorization = useUser.getState().accessToken;
	return config;
});

API.interceptors.response.use(function (response) {
	console.log("응답", response);
	return response;
});
```



### bluetooth
```src\shared\bluetooth\bluetoothClassic.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionsAndroid } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";
import { useMirror } from "../zustand/MirroeStore";

export async function requestAccessFineLocationPermission() {
	const granted = await PermissionsAndroid.requestMultiple([
		PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
		PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
	]);
	return (
		granted["android.permission.BLUETOOTH_SCAN"] ===
			PermissionsAndroid.RESULTS.GRANTED &&
		granted["android.permission.BLUETOOTH_CONNECT"] ===
			PermissionsAndroid.RESULTS.GRANTED
	);
}

export async function startDiscovery() {
	await RNBluetoothClassic.requestBluetoothEnabled();
	try {
		console.debug("검색 시작");
		const granted = await requestAccessFineLocationPermission();

		if (!granted) {
			throw new Error(`Access fine location was not granted`);
		}

		try {
			const unpaired = await RNBluetoothClassic.startDiscovery();

			for (const e of unpaired) {
				console.debug(e.name);
				if (e.name === "Close_at_Hand") {
					const device = {
						address: e.address,
						id: e.id,
						deviceClass: e.deviceClass,
					};
					await AsyncStorage.setItem(
						"CloseAtHandMirror",
						JSON.stringify(device),
					);
					useMirror.setState(() => device);
					return e.address;
				}
			}
			return undefined;
		} finally {
			console.debug("검색 종료");
		}
	} catch (err) {
		console.error(err);
	}
}

export async function cancelDiscovery() {
	try {
		const cancelled = await RNBluetoothClassic.cancelDiscovery();
		console.debug("검색 종료");
		return cancelled;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export async function PairDevices(address?: string) {
	console.debug("연결 시도");
	if (!address) {
		address = JSON.parse(
			(await AsyncStorage.getItem("CloseAtHandMirror")) ?? "{}",
		).address;
		if (!address) {
			console.debug("연결 실패");
			return false;
		}
	}

	try {
		const device = await RNBluetoothClassic.pairDevice(address);
		return device;
	} catch (error) {
		console.debug("블루투스 연결 실패", error);
		return false;
	} finally {
		console.debug("시도한 주소: ", address);
	}
}

export async function dataSendToDevice(message: string) {
	const device = JSON.parse(
		(await AsyncStorage.getItem("CloseAtHandMirror")) ?? "{}",
	);

	return RNBluetoothClassic.writeToDevice(device.address, message);
}
```


### constant
```src\shared\constant\COLORS.ts
const COLORS = {
	PaleBlue: "#E7F4FF",
	Blue: "#8DB9F8",
	SkyBlue: "#8DE0F8",
	Mint: "#98DCE0",
	PupleBlue: "#7687F5",
	CarrotRed: "#F8A58D",
	Gray: "#C4C4C4",
	Black: "#121212",
	White: "#ffffff",
};

export default COLORS;
```


### notifee
```src\shared\notifee\notifee.ts
import notifee, {
	TriggerType,
	AndroidChannel,
	AndroidImportance,
	Trigger,
	RepeatFrequency,
} from "@notifee/react-native";

import { COLORS } from "../styles/STYLES";

const NotificationKey = {
	CloseAtHandHomeAlarm: "CloseAtHandHomeAlarm",
	CloseAtHandLaundryAlarm: "CloseAtHandLaundryAlarm",
	CloseAtHandClothesAlarm: "CloseAtHandClothesAlarm",
	CloseAtHandAirDresserAlarm: "CloseAtHandAirDresserAlarm",
};

export type NotificationType = {
	[key in keyof typeof NotificationKey]: boolean;
};

// 알람 권한
export async function getNotificationPermission() {
	await notifee.requestPermission();
}

function getRandomNum(min: number, max: number): number {
	// min (포함)와 max (제외) 시(hour) 사이의 랜덤 시간
	return Math.floor(Math.random() * (max - min) + min);
}

// 알람 설정
export async function scheduleDailyAlarm() {
	deleteNotification(NotificationKey.CloseAtHandHomeAlarm);
	const date = new Date();
	const randomHour = getRandomNum(18, 25); // 6PM (18)와 8PM (20) 사이의 랜덤한 시간
	const randomMinute = getRandomNum(0, 60);
	const randomSecond = getRandomNum(0, 60);
	date.setHours(randomHour, randomMinute, randomSecond);

	console.debug("alarm set at", date.getTime());

	const trigger: Trigger = {
		type: TriggerType.TIMESTAMP,
		timestamp: date.getTime(),
		repeatFrequency: RepeatFrequency.DAILY,
	};

	const channelId: string = await notifee.createChannel({
		id: NotificationKey.CloseAtHandHomeAlarm,
		name: NotificationKey.CloseAtHandHomeAlarm,
		importance: AndroidImportance.DEFAULT,
	} as AndroidChannel);

	await notifee.createTriggerNotification(
		{
			title: "집에 도착하셨나요?",
			body: "오늘 입은 옷을 세탁바구니에 넣어주세요!",
			android: {
				channelId,
				color: COLORS.LightMint,
				pressAction: { id: "default" },
			},
			data: { notificationType: NotificationKey.CloseAtHandHomeAlarm },
			id: NotificationKey.CloseAtHandHomeAlarm,
		},
		trigger,
	);
}

export const notification: { id: null | "CloseAtHandHomeAlarm" } = { id: null };

export async function deleteNotification(channelId: string) {
	await notifee.deleteChannel(channelId);
}
```



### realm
```src\shared\realm\realm.ts
import Realm from "realm";

export class LaundryDB extends Realm.Object<LaundryDB> {
	clothesId!: number;
	clothesImgUrl!: string;
	textures!: number;
	lastDayOfWear!: Date;
	lastWash?: Date;

	static generate(
		clothesId: number,
		clothesImgUrl: string,
		textures: number,
		lastWash: Date,
	) {
		return {
			clothesId,
			clothesImgUrl,
			textures,
			lastWash,
			lastDayOfWear: new Date(),
		};
	}

	static schema = {
		name: "LaundryDB",
		properties: {
			clothesId: "int",
			clothesImgUrl: "string",
			textures: "int",
			lastWash: "date",
			lastDayOfWear: "date",
		},
		primaryKey: "clothesId",
	};
}
```



### styles
```src\shared\styles\commonStyleSheet.ts
import { StyleSheet } from "react-native";
import { COLORS } from "./STYLES";

const styles = StyleSheet.create({
	shadow: {
		backgroundColor: COLORS.White,

		elevation: 5,

		shadowColor: COLORS.Black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.75,
		shadowRadius: 5,
	},

	row: {
		flexDirection: "row",
		justifyContent: "center",
	},

	center: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
});

export const SHADOW = styles.shadow;
export const ROW = styles.row;
export const CENTER = styles.center;
```



```src\shared\styles\STYLES.ts
export const COLORS = {
	PaleBlue: "#E7F4FF",
	Blue: "#8DB9F8",
	SkyBlue: "#8DE0F8",
	Mint: "#98DCE0",
	LightMint: "#E2FAFC",
	PurpleBlue: "#7687F5",
	LightViolet: "#EBEDFF",
	CarrotRed: "#EB731C",
	CarrotRedRipple: "#FC842D",
	Gray: "#C4C4C4",
	LightGray: "#e7e7e7",
	Turquoise: "#538392",
	Black: "#121212",
	White: "#ffffff",
};

export const FONTSIZE = {
	ExtraSmall: 16,
	Small: 20,
	Medium: 24,
	Large: 28,
	ExtarLarge: 32,
	XXLarge: 36,
};
```



### utill
```src\shared\util\token.ts
import { API } from "../axios/axios";
import { useIsLogin, useRefreshToken } from "../zustand/userStore";

export function getToken() {
	const { token } = useRefreshToken();
	const isLogin = useIsLogin();
	if (isLogin) {
		// refresh Token으로 access Token 얻기
	}
}
```


### zustand
```src\shared\zustand\MirroeStore.ts
import { BluetoothDevice } from "react-native-bluetooth-classic";
import { create } from "zustand";

interface device {
	address: string;
	id: string;
	deviceClass: string | undefined;
}
interface Mirror extends device {
	setDevice(device: device): void;
}

export const useMirror = create<Mirror>((set) => ({
	address: "",
	id: "",
	deviceClass: "",
	setDevice(device) {
		set(() => device);
	},
}));
```



```src\shared\zustand\userStore.ts
import { create } from "zustand";

interface User {
	accessToken: string;
	refreshToken: string;
	nickName: string;
	actions: {
		setAccessToken: (token: User["accessToken"]) => void;
		setRefreshToken: (token: User["refreshToken"]) => void;
		getNickname: (nickname: User["nickName"]) => void;
	};
}

export const useUser = create<User>((set) => ({
	accessToken: "",
	refreshToken: "",
	nickName: "",
	actions: {
		setAccessToken: (token) =>
			set((state) => ({
				...state,
				accessToken: token,
			})),
		setRefreshToken: (token) => {
			set((state) => ({
				...state,
				refreshToken: token,
			}));
		},
		getNickname(nickName) {
			set((state) => ({
				...state,
				nickName,
			}));
		},
	},
}));

export const useToken = () => useUser((state) => state.accessToken);
export const useRefreshToken = () => useUser((state) => state.refreshToken);
export const useNickName = () => useUser((state) => state.nickName);
export const useUserActions = () => useUser((state) => state.actions);
```