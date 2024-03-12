import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../../screens";

export type ParamList = {
	login: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const OnBoardingNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
