import renderer from "react-test-renderer";
import "@react-navigation/native";

import HistoryMainScreen from "./HistoryMainScreen";

jest.mock("@react-navigation/native");
jest.mock("../../components");

describe("HistoryMainScreen", () => {
	it("스냅샷 테스트", () => {
		const tree = renderer.create(<HistoryMainScreen />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
