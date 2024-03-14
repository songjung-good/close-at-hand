import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HistoryMainScreen,
	LandryMainScreen,
	ManagementMainScreen,
} from "../../screens";

export type MangeMentParamList = {
	managementMain: undefined;
	laundryMain: undefined;
	history: undefined;
};

const Stack = createNativeStackNavigator<MangeMentParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="managementMain"
				component={ManagementMainScreen}
				options={{ headerShown: false }}
			></Stack.Screen>
			<Stack.Screen
				name="laundryMain"
				component={LandryMainScreen}
			></Stack.Screen>
			<Stack.Screen name="history" component={HistoryMainScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default ManagementNav;
