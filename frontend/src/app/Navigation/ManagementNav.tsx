import { Stack } from "./reactNavigations";
import { ManagementScreen } from "../../screens";

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
