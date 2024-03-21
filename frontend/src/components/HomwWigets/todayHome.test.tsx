import { render } from "@testing-library/react-native";
import { useQuery } from "@tanstack/react-query";

import TodayHome from "./TodayHome";
import { fetchToday } from "./API";
import { API } from "../../shared";

jest.mock("@tanstack/react-query");
jest.mock("../../shared");

const mockUseQuery = useQuery as jest.Mock;
const mockAPI = API.get as jest.Mock; // axios 인스턴스

describe("TodayHome", () => {
	it("Loading 상태 렌더링", () => {
		(useQuery as jest.Mock).mockReturnValue({
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
		(useQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: false,
			isError: true,
		});

		// 컴포넌트를 렌더링하고 에러 상태를 확인합니다.
		const { getByText } = render(<TodayHome />);
		expect(getByText("인터넷 연결을 확인하여 주세요")).toBeDefined();
	});

	it("데이터 있는 경우 렌더링", () => {
		// 이 테스트를 위해 useQuery를 모의(mock)하고 데이터를 설정합니다.
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

	it("404에러", async () => {
		// 모의(mock)된 axios.get 함수에 대한 응답을 설정합니다.
		mockAPI.mockResolvedValueOnce({ status: 404 });

		const result = await fetchToday();

		expect(result).toEqual(
			"기록된 오늘의 코디가 없어요! \n 오늘의 코디를 추가해 주세요.",
		);
	});
});
