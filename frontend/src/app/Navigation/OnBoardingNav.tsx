import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	ForDebug,
	LoginScreen,
	BluetoothConnectionScreen,
} from "../../screens";

export type OnBoardingParamList = {
	login: undefined;
	forDebug: undefined;
	bluetooth: undefined;
};

const Stack = createNativeStackNavigator<OnBoardingParamList>();

const OnBoardingNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="forDebug" component={ForDebug} />
			<Stack.Screen name="login" component={LoginScreen} />
			<Stack.Screen name="bluetooth" component={BluetoothConnectionScreen} />
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
