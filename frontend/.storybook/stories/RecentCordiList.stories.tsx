import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavigationContainer } from "@react-navigation/native";

import CordiCard from "../../src/components/cordiCard/CordiCard";

const meta: Meta = {
	component: CordiCard,
	title: "버튼",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const 옷_기록_사진_버튼: Story = (args) => (
	<NavigationContainer>
		<CordiCard {...args} />
	</NavigationContainer>
);

옷_기록_사진_버튼.args = {
	outfitId: 1,
	outfitUrl:
		"https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5353%2F2023%2F04%2F06%2F0000878288_001_20230406192401791.jpg&type=a340",
};
