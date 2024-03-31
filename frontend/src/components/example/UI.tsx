import { ReactNode } from "react";
import { View } from "react-native";

interface Props {
	children: ReactNode;
}

const UI: React.FC<Props> = ({ children }) => {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			{children}
		</View>
	);
};

export default UI;
