import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../shared";
import { useQuery } from "@tanstack/react-query";
import { fetchToday } from "./API";

interface StyledTextProps {
	content: string;
}

const StyledText: React.FC<StyledTextProps> = ({ content }) => {
	return <Text style={styles.statusText}>{content}</Text>;
};

const TodayHome = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["today"],
		queryFn: fetchToday,
		staleTime: 1000 * 60 * 60 * 60, // 1시간
	});

	let content;

	if (data) {
		if (typeof data === "string") {
			content = <StyledText content={data} />;
		} else {
			content = <StyledText content="데이터 표시하기" />;
		}
	}

	if (isLoading) {
		content = (
			<StyledText
				content={"데이터를 받아 오는 중입니다. \n 잠시만 기다려 주세요"}
			/>
		);
	} else if (isError) {
		content = <StyledText content="인터넷 연결을 확인하여 주세요" />;
	}

	return (
		<Pressable style={styles.container}>
			<View style={styles.innerContainer}>
				<AntDesign name="pluscircle" size={80} color={COLORS.PupleBlue} />
				{content}
			</View>
		</Pressable>
	);
};

export default TodayHome;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		marginTop: 15,
		backgroundColor: COLORS.LightViolet,
		width: "100%",
	},
	innerContainer: {
		margin: 15,
		borderWidth: 5,
		borderColor: COLORS.PupleBlue,
		borderRadius: 10,
		borderStyle: "dashed",
		alignItems: "center",
		minHeight: 200,
		justifyContent: "center",
	},
	statusText: {
		color: COLORS.PupleBlue,
		textAlign: "center",
		fontWeight: "bold",
	},
});
