import { Button, Text } from "react-native";

import { useBears, useBearActions } from "../../shared";
import UI from "./UI";

function Example() {
	const bears = useBears();
	const bearActions = useBearActions();

	return (
		<UI>
			<Text testID="bearValue">{bears}</Text>
			<Button
				testID="bearButton"
				title="증가"
				onPress={() => {
					return bearActions.increasePopulation(1);
				}}
			/>
		</UI>
	);
}

export default Example;
