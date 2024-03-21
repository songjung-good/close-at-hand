import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type HomeParamList = {
	home: undefined;
	controller: undefined;
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
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default HomeNav;
