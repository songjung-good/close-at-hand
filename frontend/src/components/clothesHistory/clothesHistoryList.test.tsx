import { render, waitFor } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";
import "@react-navigation/native";

import ClothesHistoryList from "./ClothesHistoryList";
import Card from "../coordyCard/CoordyCard";
import { ClothesFetchListResponse } from "../types";

jest.mock("@react-navigation/native");
jest.mock("@tanstack/react-query");

const mockUsequery = useQuery as jest.Mock;

describe("ClothesHistoryList component", () => {
	it("렌더링 테스트", async () => {
		const mockData = Array.from({ length: 5 }, (_, i) => ({
			outfitId: i,
			name: `https://example.com/outfit1.jpg${i + 1}`,
		}));

		// useQuery를 mocking
		mockUsequery.mockReturnValue({
			data: mockData,
			isError: false,
			error: null,
		});

		const { getByTestId, queryByText } = render(<ClothesHistoryList />);

		// 모든 컴포넌트가 렌더링 되기를 기다림
		await waitFor(() => {
			// 모든 데이터가 올바르게 렌더링됨
			mockData.forEach((item) => {
				expect(getByTestId(`card-${item.outfitId}`)).toBeDefined();
			});
			// 에러 메세지는 나오지 않아야 함
			expect(queryByText("네트워크 에러")).toBeNull();
		});
	});

	it("에러 발생 시 에러 표시", async () => {
		const mockError = new Error("네트워크 에러");

		// 에러 상황의 useQuery를 mocking
		mockUsequery.mockReturnValue({
			data: null,
			isError: true,
			error: mockError,
		});

		// Render the component
		const { getByText } = render(<ClothesHistoryList />);

		// 에러 메세지가 올바르게 나옴
		await waitFor(() => {
			expect(getByText("네트워크 에러")).toBeDefined();
		});
	});
});

describe("Card component", () => {
	it("렌더링 테스트", () => {
		const outfit: ClothesFetchListResponse = {
			outfitId: 1,
			outfitUrl: "https://example.com/outfit.jpg",
		};

		const { getByTestId } = render(<Card {...outfit} />);

		expect(getByTestId(`card-${outfit.outfitId}`)).toBeDefined();
	});
});
