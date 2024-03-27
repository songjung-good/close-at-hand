import { render } from "@testing-library/react-native";
import "@realm/react";

import Basket from "./LaundryBasket";

jest.mock("@realm/react");

describe("LaundryBasket", () => {
	afterEach(() => {
		// restore the spy created with spyOn
		jest.restoreAllMocks();
	});

	it("렌더링 테스트", () => {
		const { getByText } = render(<Basket textures="텍스처" />);

		//버튼 렌더링
		const button = getByText("세탁하기");
		expect(button).toBeDefined();

		// 버튼 설명 렌더링
		const desc = getByText(/세탁하기를 누르면/);
		expect(desc).toBeDefined();
	});
});
