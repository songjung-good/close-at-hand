import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForDebug, LoginScreen } from "../../screens";
import BluetoothConnection from "../../screens/onboarding/BluetoothConnection";

export type OnBoardingParamList = {
	login: undefined;
	forDebug: undefined;
	bluetooth: undefined;
};

const Stack = createNativeStackNavigator<OnBoardingParamList>();

const OnBoardingNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="forDebug" component={ForDebug}></Stack.Screen>
			<Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
			<Stack.Screen
				name="bluetooth"
				component={BluetoothConnection}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
