import { StyleSheet } from "react-native";
import { Stack } from "./reactNavigations";
import { ManagementScreen } from "../../screen";

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

const styles = StyleSheet.create({});
