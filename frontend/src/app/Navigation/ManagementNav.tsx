import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ManagementScreen } from "../../screens";

export type MangeMentParamList = {
	management: undefined;
};

const Stack = createNativeStackNavigator<MangeMentParamList>();

const ManagementNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="management"
				component={ManagementScreen}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default ManagementNav;
