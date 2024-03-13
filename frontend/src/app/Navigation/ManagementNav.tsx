import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HistoryMainScreen,
	LandryMainScreen,
	ManagementMainScreen,
} from "../../screens";

export type MangeMentParamList = {
	managementMain: undefined;
	LaundryMain: undefined;
	History: undefined;
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
				name="LaundryMain"
				component={LandryMainScreen}
			></Stack.Screen>
			<Stack.Screen name="History" component={HistoryMainScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default ManagementNav;
