import { render } from "@testing-library/react-native";
import "@realm/react";
import "@react-navigation/native";

import Basket from "./LaundryBasket";
import { useMutation } from "@tanstack/react-query";

jest.mock("@realm/react");
jest.mock("@react-navigation/native");
jest.mock("@tanstack/react-query");

const mockMutation = useMutation as jest.Mock;

describe("LaundryBasket", () => {
	it("렌더링 테스트", () => {
		mockMutation.mockReturnValue({
			mutate: () => jest.fn(),
		});

		const { getByText } = render(<Basket textures="일반 세탁" />);

		//버튼 렌더링
		const button = getByText("세탁하기");
		expect(button).toBeDefined();

		// 버튼 설명 렌더링
		const desc = getByText(/세탁하기를 누르면/);
		expect(desc).toBeDefined();
	});
});
