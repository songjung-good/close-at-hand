import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

import {
	useBears,
	useBearActions,
} from "../../shared/lib/zustand/example/exampleStore";

function Example() {
	const bears = useBears();
	const bearActions = useBearActions();

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<StatusBar style="auto" />
			<Text testID="bearValue">{bears}</Text>
			<Button
				testID="bearButton"
				title="증가"
				onPress={() => {
					return bearActions.increasePopulation(1);
				}}
			/>
		</View>
	);
}

export default Example;
