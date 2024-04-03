import { render } from "@testing-library/react-native";
import HomeInfo, { Title } from "./HomeInfo";
import "@react-navigation/native";
import "@realm/react";
import "./API";

jest.mock("@react-navigation/native");
jest.mock("@realm/react");
jest.mock("./API", () => ({
	...jest.requireActual("@realm/react"),
	countLaundries: jest.fn().mockReturnValue(0),
}));

describe("Bascket 컴포넌트", () => {
	test("개수 텍스트가 렌더링되는지 확인", () => {
		const { getByText } = render(<HomeInfo />);
		expect(getByText(/\d+개$/)).toBeDefined();
	});
});

describe("Closet 컴포넌트", () => {
	test("빨래 바구니 타이틀이 렌더링되는지 확인", () => {
		const { getByText } = render(<HomeInfo />);
		expect(getByText("빨래 바구니")).toBeDefined();
	});

	test("옷장 타이틀이 렌더링되는지 확인", () => {
		const { getByText } = render(<HomeInfo />);
		expect(getByText("옷장")).toBeDefined();
	});
});

describe("Title 컴포넌트", () => {
	test("제목이 올바르게 렌더링되는지 확인", () => {
		const { getByText } = render(<Title title="테스트 타이틀" />);
		expect(getByText("테스트 타이틀")).toBeDefined();
	});
});
