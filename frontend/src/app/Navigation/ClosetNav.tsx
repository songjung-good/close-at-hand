import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClosetScreen } from "../../screens";

export type ParamList = {
	closet: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const ClosetNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="closet" component={ClosetScreen} />
		</Stack.Navigator>
	);
};

export default ClosetNav;
