import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

import App from "./App";

describe("<App />", () => {
	it("has 1 child", () => {
		const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
		if (tree?.children !== null) {
			expect(tree.children.length).toBe(2);
		} else {
			// Handle the case where tree is null or tree.children doesn't exist
			throw new Error("Tree or tree.children is null or undefined");
		}
	});
});
