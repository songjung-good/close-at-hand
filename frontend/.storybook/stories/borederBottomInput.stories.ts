import type { Meta, StoryObj } from "@storybook/react";
import { BorderBottomInput } from "../../src/shared";

const meta = {
	component: BorderBottomInput,
	title: "입력",
} satisfies Meta<typeof BorderBottomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

let text = "";

export const 밑줄입력 = {
	args: {
		value: text,
		placeholder: "플레이스 홀더",
		onChangeText: () => {},
	},
} satisfies Story;
