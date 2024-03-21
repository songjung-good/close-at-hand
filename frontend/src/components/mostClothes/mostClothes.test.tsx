import { fireEvent, render } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

import MostClothes from "./MostClothes";

jest.mock("@tanstack/react-query");
jest.mock("@react-navigation/native");

const mockUseQuery = useQuery as jest.Mock;
const mockUseNavigation = useNavigation as jest.Mock;

describe("MostClothes", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	const testId = 0;
	const mockData = [
		{
			clothesImageUrl:
				"https://alphabiz.co.kr/news/data/20230710/p1065575228977193_200_h2.jpg",
			clothesId: testId,
		},
		{
			clothesImageUrl:
				"https://alphabiz.co.kr/news/data/20230710/p1065575228977193_200_h2.jpg",
			clothesId: 1,
		},
	];

	it("렌더링 테스트", () => {
		mockUseQuery.mockReturnValue({
			data: mockData,
		});

		const { getByTestId } = render(<MostClothes />);

		mockData.forEach((e) => {
			expect(getByTestId(`test-${e.clothesId}`)).toBeDefined();
		});
	});

	it("사진을 누르면 옷 상세 정보로 이동", () => {
		mockUseQuery.mockReturnValue({
			data: mockData,
		});

		const mockNavigation = {
			navigate: jest.fn(),
		};
		mockUseNavigation.mockReturnValue(mockNavigation);

		const { getByTestId } = render(<MostClothes />);

		const button = getByTestId(`test-${testId}`);

		fireEvent.press(button);

		expect(mockNavigation.navigate).toHaveBeenCalledWith("cloth", {
			id: testId,
		});
	});
});
