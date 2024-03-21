import { render, fireEvent } from "@testing-library/react-native";
import CordiCard from "./CordiCard";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");

const mockUseNavigation = useNavigation as jest.Mock;

describe("CordiCard 컴포넌트", () => {
	it("Pressable을 누르면 navigate 함수 호출", () => {
		const mockNavigation = {
			navigate: jest.fn(),
		};

		const testId = 1;

		mockUseNavigation.mockReturnValue(mockNavigation);

		const { getByTestId } = render(
			<CordiCard outfitId={testId} outfitUrl="test-url" />,
		);

		const pressable = getByTestId("card-1");
		fireEvent.press(pressable);

		expect(mockNavigation.navigate).toHaveBeenCalledWith("recentCoordyDetail", {
			outfitId: testId,
		});
	});

	it("noOnPress가 true일 때 navigate 함수가 호출 안됨", () => {
		const mockNavigation = {
			navigate: jest.fn(),
		};

		const testId = 1;

		mockUseNavigation.mockReturnValue(mockNavigation);

		const { getByTestId } = render(
			<CordiCard outfitId={testId} outfitUrl="test-url" noOnPress={true} />,
		);

		const pressable = getByTestId("card-1");
		fireEvent.press(pressable);

		expect(mockNavigation.navigate).not.toHaveBeenCalled();
	});
});
