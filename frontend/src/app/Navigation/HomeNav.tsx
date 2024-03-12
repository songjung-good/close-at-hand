import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../screens";

export type HomeParamList = {
	home: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;
