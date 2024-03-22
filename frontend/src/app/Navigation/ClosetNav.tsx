import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClosetScreen, ClothInfoScreen } from "../../screens";

export type ClosetParamList = {
	closet: undefined;
	cloth: {id: number};
};

const Stack = createNativeStackNavigator<ClosetParamList>();

const ClosetNav = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerTitleStyle: { fontWeight: "bold" } }}
		>
			<Stack.Screen name="closet" component={ClosetScreen} options={{ title: "내 옷장" }}/>
			<Stack.Screen name="cloth" component={ClothInfoScreen} options={{ title: "옷장으로" }}/>
		</Stack.Navigator>
	);
};

export default ClosetNav;
