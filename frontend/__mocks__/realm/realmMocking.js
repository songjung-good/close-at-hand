jest.mock("realm", () => {
	return require("./realm");
});

jest.mock("@realm/react");
