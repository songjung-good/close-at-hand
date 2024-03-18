import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HistoryMainScreen,
	LandryMainScreen,
	ManagementMainScreen,
	RecentCody,
} from "../../screens";

export type MangeMentParamList = {
	managementMain: undefined;
	laundryMain: undefined;
	history: undefined;
	recentCody: undefined;
};

const Stack = createNativeStackNavigator<MangeMentParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="managementMain"
				component={ManagementMainScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="laundryMain" component={LandryMainScreen} />
			<Stack.Screen name="history" component={HistoryMainScreen} />
			<Stack.Screen name="recentCody" component={RecentCody} />
		</Stack.Navigator>
	);
};

export default ManagementNav;
