import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import StyledButton from "./StyledButton";

describe("StyledButton", () => {
	const INITIAL_VALUE = "value";

	it("스냅샷 테스트", () => {
		const tree = renderer
			.create(<StyledButton title={INITIAL_VALUE} onPress={jest.fn()} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("버튼에 텍스트가 올바르게 렌더링됩니다.", () => {
		const { getByText } = render(
			<StyledButton title={INITIAL_VALUE} onPress={jest.fn()} />,
		);

		expect(getByText(INITIAL_VALUE)).toBeTruthy();
	});

	it("onPress가 버튼을 터치할 때마다 호출됩니다.", () => {
		const onPress = jest.fn();
		const { getByTestId } = render(
			<StyledButton title={INITIAL_VALUE} onPress={onPress} />,
		);

		const button = getByTestId("button");

		fireEvent.press(button);
		expect(onPress).toHaveBeenCalledTimes(1);

		fireEvent.press(button);
		expect(onPress).toHaveBeenCalledTimes(2);
	});
});
