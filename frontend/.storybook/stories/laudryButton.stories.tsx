import type { Meta, StoryObj } from "@storybook/react";
import LaudryButton from "../../src/components/buttons/LaudryButton";

const meta = {
	component: LaudryButton,
	title: "버튼",
} satisfies Meta<typeof LaudryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 세탁_바구니_버튼 = {
	args: {
		bubble1: true,
		title: "옷 종류",
		onPress: () => {},
	},
} satisfies Story;
