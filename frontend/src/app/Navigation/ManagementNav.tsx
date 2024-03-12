import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ManagementScreen } from "../../screens";

export type ParamList = {
	management: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

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
