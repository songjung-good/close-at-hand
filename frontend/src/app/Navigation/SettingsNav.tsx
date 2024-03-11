import { StyleSheet } from "react-native";
import { Stack } from "./reactNavigations";
import { SettingsScreen } from "../../screen";

const SettingsNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="settings" component={SettingsScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default SettingsNav;

const styles = StyleSheet.create({});
