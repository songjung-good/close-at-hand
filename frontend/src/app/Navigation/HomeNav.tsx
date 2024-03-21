import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ControllerScreen, HomeScreen } from "../../screens";

export type HomeParamList = {
	home: undefined;
	controller: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="home"
				component={HomeScreen}
				options={{ headerTitle: "홈" }}
			/>
			<Stack.Screen name="controller" component={ControllerScreen} />
		</Stack.Navigator>
	);
};

export default HomeNav;
