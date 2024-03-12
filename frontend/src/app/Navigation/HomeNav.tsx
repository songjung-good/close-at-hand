import { Stack } from "./reactNavigations";
import { HomeScreen } from "../../screens";

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;
