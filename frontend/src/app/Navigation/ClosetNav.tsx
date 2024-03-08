import { ClosetScreen } from "../../screen/index";
import { Stack } from "./reactNavigations";

const ClosetNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="closet" component={ClosetScreen} />
		</Stack.Navigator>
	);
};

export default ClosetNav;
