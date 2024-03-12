import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../screens";

export type ParamList = {
	home: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;
