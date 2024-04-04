import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen } from "../../screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type HomeParamList = {
	home: undefined;
	controller: undefined;
	login: undefined;
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<SafeAreaProvider>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="home"
			>
				<Stack.Screen name="login" component={LoginScreen} />
				<Stack.Screen name="home" component={HomeScreen} />
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default HomeNav;
