import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Stack } from "./reactNavigations";
import { HomeScreen } from "../../screen";
import { ControllerScreen } from "../../screens"; // 추가

export type HomeParamList = {
	home: undefined;
	controller: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();


const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
			<Stack.Screen name="controller" component={ControllerScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};
const styles = StyleSheet.create({});

export default HomeNav;
