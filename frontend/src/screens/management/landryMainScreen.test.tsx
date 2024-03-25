import { render, fireEvent } from "@testing-library/react-native";
import LandryMainScreen from "./LandryMainScreen";

describe("LandryMainScreen", () => {
	// navigation 모의 객체 생성
	const navigationMock = {
		navigate: jest.fn(),
	};

	it("navigation.navigate가 올바른 인자와 함께 호출", () => {
		const { getByText } = render(
			<LandryMainScreen navigation={navigationMock as never} />,
		);

		// 일반 세탁 버튼 찾기
		const normalWashButton = getByText("일반 세탁");

		// 일반 세탁 버튼 클릭 이벤트 발생
		fireEvent.press(normalWashButton);

		// navigate 함수가 호출되었는지 확인
		expect(navigationMock.navigate).toHaveBeenCalledWith("laundryBasket", {
			basket: "일반 세탁",
		});
	});
});
