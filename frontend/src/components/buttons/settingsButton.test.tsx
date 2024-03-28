import { fireEvent, render } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";

import SettingsButton from "./SettingsButton";

jest.mock("@react-navigation/native");

const mockUseNavigation = useNavigation as jest.Mock;

// svg 이미지를 컴포넌트로 사용하기 때문에 null을 리턴하는 컴포넌트로 모킹한다.
jest.mock("../../../assets/image/Wifi.svg", () =>
	jest.fn().mockReturnValue(null),
);
jest.mock("../../../assets/image/alarm.svg", () =>
	jest.fn().mockReturnValue(null),
);
jest.mock("../../../assets/image/Profile.svg", () =>
	jest.fn().mockReturnValue(null),
);

describe("settingsButton.test", () => {
	it("렌더링 테스트", () => {
		const name = "이름";
		const { getByText } = render(<SettingsButton name="alarm" title={name} />);

		expect(getByText(name)).toBeDefined();
	});

	it("버튼을 누르면 네비게이션 호출", () => {
		const mockNavigation = {
			navigate: jest.fn(),
		};

		mockUseNavigation.mockReturnValue(mockNavigation);

		const { getByText } = render(<SettingsButton name="alarm" title="이름" />);

		const button = getByText("이름");

		fireEvent.press(button);

		expect(mockNavigation.navigate).toHaveBeenCalled();
	});
});
