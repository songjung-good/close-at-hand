import { render, fireEvent } from "@testing-library/react-native";
import MirrorConnection from "./MirrorConnection";

jest.mock("@react-navigation/native");

describe("MirrorConnection 컴포넌트", () => {
	it("버튼을 누르면 mode가 변경되어 overlay가 나타난다", () => {
		const { getByText, queryByText } = render(<MirrorConnection />);

		// overlay가 처음에는 보이지 않아야 함
		expect(queryByText("클로젯 핸드\n레이아웃 변경")).toBeNull();

		fireEvent.press(getByText("Close-At-Hand가 연결되었어요!"));

		// overlay가 나타나야 함
		expect(getByText("클로젯 핸드\n레이아웃 변경")).toBeDefined();
	});

	it("overlay가 나타난 상태에서 다시 버튼을 누르면 overlay가 사라진다", () => {
		const { getByText, queryByText } = render(<MirrorConnection />);

		// overlay가 처음에는 보이지 않아야 함
		expect(queryByText("클로젯 핸드\n레이아웃 변경")).toBeNull();

		fireEvent.press(getByText("Close-At-Hand가 연결되었어요!"));

		// overlay가 나타나야 함
		expect(getByText("클로젯 핸드\n레이아웃 변경")).toBeDefined();

		// 버튼을 다시 누름
		fireEvent.press(getByText("Close-At-Hand가 연결되었어요!"));

		// overlay가 사라져야 함
		expect(queryByText("클로젯 핸드\n레이아웃 변경")).toBeNull();
	});
});
