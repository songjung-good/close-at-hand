import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForDebug } from "../../screens";

export type OnBoardingParamList = {
	forDebug: undefined;
};

const Stack = createNativeStackNavigator<OnBoardingParamList>();

const OnBoardingNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="forDebug" component={ForDebug} />
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
