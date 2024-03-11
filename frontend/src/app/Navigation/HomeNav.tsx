import { StyleSheet } from "react-native";
import { Stack } from "./reactNavigations";
import { HomeScreen } from "../../screen";

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;

const styles = StyleSheet.create({});
