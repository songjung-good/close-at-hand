import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClosetMainScreen, ClothInfoScreen } from "../../screens";

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
			<Stack.Screen name="closet" component={ClosetMainScreen} options={{ title: "내 옷장" }}/>
			<Stack.Screen name="cloth" component={ClothInfoScreen} options={{ title: "옷 정보" }}/>
		</Stack.Navigator>
	);
};

export default ClosetNav;
