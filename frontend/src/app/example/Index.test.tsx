import React from "react";
import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";

import Index from "./Index";

describe("Example component 렌더링 확인", () => {
	it("renders initial bear count", () => {
		const { getByText } = render(<Index />);
		expect(getByText("0")).toBeTruthy(); // 초기 값은 0이다.
	});

	it("버튼을 누르면 bear 값이 1 증가한다", () => {
		const { getByTestId } = render(<Index />);

		const button = getByTestId("bearButton");

		fireEvent(button, "onPress");

		const bearValue = getByTestId("bearValue");

		expect(bearValue.children[0]).toBe("1");
	});
});
