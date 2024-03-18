import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import TextButton from "./TextButton";

describe("TextButton", () => {
	const TEXT = "터치하세요";

	it("스냅샷 테스트", () => {
		const tree = renderer
			.create(<TextButton text={TEXT} onPress={jest.fn()} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("입력한 텍스트가 렌더링됩니다.", () => {
		const { getByText } = render(
			<TextButton text={TEXT} onPress={jest.fn()} />,
		);

		const text = getByText(TEXT);

		expect(text).toBeTruthy();
	});

	it("버튼을 누르면 onPress 함수가 실행됩니다.", () => {
		const onPress = jest.fn();

		const { getByTestId } = render(
			<TextButton text={TEXT} onPress={onPress} />,
		);

		const button = getByTestId("button");

		fireEvent.press(button);
		expect(onPress).toHaveBeenCalled();
	});
});
