import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForDebug, LoginScreen } from "../../screens";
import BluetoothConnectionScreen from "../../screens/onboarding/BluetoothConnectionScreen";

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
				component={BluetoothConnectionScreen}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
