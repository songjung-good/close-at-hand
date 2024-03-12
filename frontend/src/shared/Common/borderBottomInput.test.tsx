import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import BorderBottomInput from "./BorderBottomInput";

describe("BorderBottomInput", () => {
	const INITIAL_VALUE = "value";
	const TestID = "input";

	it("스냅샷 테스트", () => {
		const tree = renderer
			.create(
				<BorderBottomInput
					value={INITIAL_VALUE}
					onChangeText={jest.fn()}
					placeholder="플레이스홀더"
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("placeholder가 작성됩니다.", () => {
		const { getByPlaceholderText } = render(
			<BorderBottomInput
				value={INITIAL_VALUE}
				onChangeText={jest.fn()}
				placeholder="플레이스홀더"
			/>,
		);
		expect(getByPlaceholderText("플레이스홀더")).toBeTruthy();
	});

	it("value를 렌더링합니다.", () => {
		const { getByTestId } = render(
			<BorderBottomInput
				value={INITIAL_VALUE}
				onChangeText={jest.fn()}
				placeholder="플레이스홀더"
			/>,
		);
		expect(getByTestId(TestID)).toBeTruthy();
	});

	it("텍스트를 입력하면 setValue가 입력값을 받아 실행됩니다.", () => {
		const setValue = jest.fn();
		const { getByTestId } = render(
			<BorderBottomInput
				value={INITIAL_VALUE}
				onChangeText={setValue}
				placeholder="플레이스홀더"
			/>,
		);

		const input = getByTestId(TestID);

		fireEvent.changeText(input, "새 입력");

		expect(setValue).toHaveBeenCalledWith("새 입력");
	});
});
