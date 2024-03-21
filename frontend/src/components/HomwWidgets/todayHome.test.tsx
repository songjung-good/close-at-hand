import { fireEvent, render } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";

import TodayHome from "./TodayHome";
import { fetchToday } from "./API";
import { API } from "../../shared";

jest.mock("@tanstack/react-query");
jest.mock("../../shared");

const mockUseQuery = useQuery as jest.Mock;
const mockAPI = API.get as jest.Mock; // axios 인스턴스

describe("TodayHome", () => {
	beforeEach(() => {
		jest.clearAllMocks(); // 각 테스트 전에 모든 모킹을 초기화합니다.
	});

	it("Loading 상태 렌더링", () => {
		mockUseQuery.mockReturnValue({
			data: null,
			isLoading: true,
			isError: false,
		});

		const { getByText } = render(<TodayHome />);
		expect(
			getByText("데이터를 받아 오는 중입니다. \n 잠시만 기다려 주세요"),
		).toBeDefined();
	});

	it("에러 상황 렌더링", () => {
		// 이 테스트를 위해 useQuery를 모의(mock)하고 isError를 true로 설정합니다.
		mockUseQuery.mockReturnValue({
			data: null,
			isLoading: false,
			isError: true,
		});

		// 컴포넌트를 렌더링하고 에러 상태를 확인합니다.
		const { getByText } = render(<TodayHome />);
		expect(getByText("인터넷 연결을 확인하여 주세요")).toBeDefined();
	});

	it("데이터 있는 경우 렌더링", () => {
		const mockData = { message: "Test message" };
		mockUseQuery.mockReturnValue({
			data: mockData,
			isLoading: false,
			isError: false,
		});

		// 컴포넌트를 렌더링하고 데이터를 확인합니다.
		const { getByText } = render(<TodayHome />);
		expect(getByText("데이터 표시하기")).toBeDefined();
	});

	describe("204 상황", () => {
		beforeEach(() => {
			jest.clearAllMocks(); // 각 테스트 전에 모든 모킹을 초기화합니다.
		});

		it("204에러시의 올바른 데이터 반환", async () => {
			mockAPI.mockResolvedValueOnce({ status: 204 });
			const mockSignal = new AbortController();

			const result = await fetchToday({ signal: mockSignal.signal });

			expect(result).toHaveProperty(
				"message",
				"기록된 오늘의 코디가 없어요! \n 오늘의 코디를 추가해 주세요.",
			);
		});

		it("204 상황에서 터치시 refetch 함수가 올바르게 호출되는지 확인", () => {
			const refetch = jest.fn();

			// 204응답을 받음
			mockUseQuery.mockReturnValue({
				data: {
					message:
						"기록된 오늘의 코디가 없어요! \n 오늘의 코디를 추가해 주세요.",
					noResponse: true,
				},
				refetch,
			});

			// 컴포넌트를 렌더링합니다.
			const { getByTestId } = render(<TodayHome />);

			const pressableElement = getByTestId("pressible");
			fireEvent.press(pressableElement);

			// refetch 함수가 호출되었는지 확인합니다.
			expect(refetch).toHaveBeenCalled();
		});
	});

	it("에러 상황에서 터치시 refetch 함수가 올바르게 호출되는지 확인", () => {
		const refetch = jest.fn();
		// 오류 응답을 받음
		mockUseQuery.mockReturnValue({
			data: undefined,
			isLoading: false,
			isError: true,
			refetch,
		});

		// 컴포넌트를 렌더링합니다.
		const { getByTestId } = render(<TodayHome />);

		const pressableElement = getByTestId("pressible");
		fireEvent.press(pressableElement);

		// refetch 함수가 호출되었는지 확인합니다.
		expect(refetch).toHaveBeenCalled();
	});

	it("데이터가 있는 상황에서 터치시 refetch 함수가 호출안됨", () => {
		const mockData = { message: "Test message" };
		const refetch = jest.fn();
		// 오류 없이 데이터 응답 받음
		mockUseQuery.mockReturnValue({
			data: mockData,
			isLoading: false,
			isError: false,
			refetch,
		});

		const { getByTestId } = render(<TodayHome />);

		const pressableElement = getByTestId("pressible");
		fireEvent.press(pressableElement);

		// refetch 함수가 호출되었는지 확인합니다.
		expect(refetch).not.toHaveBeenCalled();
	});
});
