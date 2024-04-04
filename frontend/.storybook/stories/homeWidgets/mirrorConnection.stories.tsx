import type { Meta, StoryObj } from "@storybook/react";

import { MirrorConnection } from "../../../src/components";

const meta = {
	component: MirrorConnection,
	title: "위젯",
} satisfies Meta<typeof MirrorConnection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 거울_연결_위젯 = {} satisfies Story;
