import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../../src/components/managementMenuList/Menu";

const meta = {
	component: Menu,
	title: "버튼",
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 옷관리_메뉴 = {
	args: {
		image: require("../../assets/image/laundry_Bascket.png"),
		title: "빨래 바구니",
		backgroundColor: "SkyBlue",
	},
} satisfies Story;
