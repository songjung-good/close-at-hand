import { render } from "@testing-library/react-native";
import LaundryBasket from "./LaundryBasketScreen";
import "@realm/react";
import "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";

jest.mock("@realm/react");
jest.mock("@react-navigation/native");
jest.mock("@tanstack/react-query");

const mockMutation = useMutation as jest.Mock;

describe("LaundryBasket", () => {
	// navigation 모의 객체 생성
	const navigationMock = {
		setOptions: jest.fn(),
	};

	it("route params로 받은 문자열 렌더링", () => {
		// route.params에 필요한 데이터 설정
		const route = { params: { basket: "일반 세탁" } };
		mockMutation.mockReturnValue({
			mutate: jest.fn(),
		});

		// LaundryBasket 컴포넌트 렌더링
		const { getByText } = render(
			<LaundryBasket
				route={route as never}
				navigation={navigationMock as never}
			/>,
		);

		// 화면에 route.params.basket 텍스트가 있는지 확인
		expect(getByText(route.params.basket)).toBeDefined();
	});
});
