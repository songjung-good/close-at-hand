import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton } from "../../src/shared";

const meta = {
	component: StyledButton,
	title: "버튼",
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본버튼 = {
	args: {
		title: "제목",
		onPress: () => {},
	},
} satisfies Story;
