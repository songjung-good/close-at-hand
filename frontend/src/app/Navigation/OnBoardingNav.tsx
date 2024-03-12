import { Stack } from "./reactNavigations";
import { LoginScreen } from "../../screens";

const OnBoardingNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default OnBoardingNav;
