import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "../../src/components";

const meta = {
	component: TextButton,
	title: "버튼",
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 글자버튼 = {
	args: {
		text: "버튼",
	},
} satisfies Story;
