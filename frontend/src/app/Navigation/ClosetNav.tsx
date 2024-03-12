import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClosetScreen } from "../../screens";

export type ClosetParamList = {
	closet: undefined;
};

const Stack = createNativeStackNavigator<ClosetParamList>();

const ClosetNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="closet" component={ClosetScreen} />
		</Stack.Navigator>
	);
};

export default ClosetNav;
