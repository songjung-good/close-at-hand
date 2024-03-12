import { Stack } from "./reactNavigations";
import { ClosetScreen } from "../../screens";

const ClosetNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="closet" component={ClosetScreen} />
		</Stack.Navigator>
	);
};

export default ClosetNav;
