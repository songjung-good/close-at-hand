import { render } from "@testing-library/react-native";
import HomeInfo, { Title } from "./HomeInfo";

describe("Bascket 컴포넌트", () => {
	test("% 텍스트가 렌더링되는지 확인", () => {
		const { getByText } = render(<HomeInfo />);
		expect(getByText(/%/)).toBeDefined();
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
