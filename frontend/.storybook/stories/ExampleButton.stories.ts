import type { Meta, StoryObj } from "@storybook/react";

import ExampleButton from "./ExampleButton";

const meta = {
  component: ExampleButton,
  title: "버튼",
} satisfies Meta<typeof ExampleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    title: "예시",
  },
} satisfies Story;

export const A = {
  args: {
    title: "제목",
  },
} satisfies Story;
