import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	HomeScreen,
	LoginScreen,
	BluetoothConnectionScreen,
} from "../../screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type HomeParamList = {
	home: undefined;
	controller: undefined;
	login: undefined;
	bluetooth: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<SafeAreaProvider>
			<Stack.Navigator>
				<Stack.Screen
					name="home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>

				<Stack.Screen name="bluetooth" component={BluetoothConnectionScreen} />
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default HomeNav;
