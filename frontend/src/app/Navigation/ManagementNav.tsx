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
	laundryMain: undefined;
	history: undefined;
	recentCoordyList: undefined;
	recentCoordyDetail: { outfitId: number };
	laundryBasket: { basket: string };
};
const Stack = createNativeStackNavigator<ManagementParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerTitleStyle: { fontWeight: "bold" } }}
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
				options={{ title: "빨래 바구니" }}
			/>
			<Stack.Screen name="laundryBasket" component={LaundryBasketScreen} />
		</Stack.Navigator>
	);
};

export default ManagementNav;
