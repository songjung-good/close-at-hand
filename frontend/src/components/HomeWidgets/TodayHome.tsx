import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRealm } from "@realm/react";

import { CENTER, COLORS, FONTSIZE, ROW } from "../../shared";
import { fetchToday, TodayResponse } from "./API";
import { saveToRealm } from "./TodayHomeRealm";

const alternative = ["OOTD", "패션", "좋아요"];

const DataExist: React.FC<TodayResponse> = ({ ootdImgUrl, clothes }) => {
	console.log("fwafw", ootdImgUrl);
	const tag = clothes
		.map((e, idx) => ({
			tag:
				e.clothesTagGroupList[0]?.clothesTagList[0]?.clothesTagName ??
				alternative[idx],
			id: e.clothesId,
		}))
		.slice(0, 3);
	return (
		<View style={[ROW, styles.flex]} testID="data-box">
			<View style={[CENTER, styles.flex]}>
				<Text style={styles.todayFashion}>오늘의 패션</Text>
				{tag.map(
					(e, index) =>
						index % 2 === 0 && (
							<View style={ROW} key={e.id}>
								<View style={styles.textContainer}>
									<Text style={styles.text}># {e.tag}</Text>
								</View>
								{tag[index + 1] && (
									<View style={styles.textContainer}>
										<Text style={styles.text}># {tag[index + 1].tag}</Text>
									</View>
								)}
							</View>
						),
				)}
			</View>
			<View style={[styles.flex, styles.imgContainer]}>
				<Image style={[styles.img]} source={{ uri: ootdImgUrl }} />
			</View>
		</View>
	);
};

interface StyledTextProps {
	content: string;
}

const StyledText: React.FC<StyledTextProps> = ({ content }) => {
	return <Text style={styles.statusText}>{content}</Text>;
};

const TodayHome = () => {
	const realm = useRealm();
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["home", "today", new Date().toISOString().split("T")[0]],
		queryFn: fetchToday,
		gcTime: 1000 * 60 * 60 * 60 * 10, // 10시간
		placeholderData: {
			message:
				"기록된 오늘의 코디가 없어요! \n 터치하여 오늘의 코디를 받아보세요.",
			noResponse: true,
		},
	});

	function handlePress() {
		if (isError || (data && "noResponse" in data)) {
			refetch();
		}
	}

	let content;

	if (data) {
		if ("noResponse" in data) {
			content = (
				<>
					<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
					<StyledText content={data.message} />
				</>
			);
		} else {
			content = (
				<DataExist
					ootdImgUrl={data.ootdImgUrl}
					clothes={data.clothes}
					ootdId={data.ootdId}
				/>
			);

			saveToRealm(data, realm);
		}
	}

	if (isLoading) {
		content = (
			<>
				<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
				<StyledText
					content={"데이터를 받아 오는 중입니다. \n 잠시만 기다려 주세요"}
				/>
			</>
		);
	} else if (isError) {
		content = (
			<>
				<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
				<StyledText
					content={error.message ?? "인터넷 연결을 확인하여 주세요"}
				/>
			</>
		);
	}

	return (
		<Pressable
			style={styles.container}
			onPress={handlePress}
			testID="pressible"
		>
			<View style={styles.innerContainer}>{content}</View>
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
		borderColor: COLORS.PurpleBlue,
		borderRadius: 10,
		borderStyle: "dashed",
		alignItems: "center",
		minHeight: 200,
		justifyContent: "center",
	},
	statusText: {
		color: COLORS.PurpleBlue,
		textAlign: "center",
		fontWeight: "bold",
	},
	imgContainer: {
		width: "100%",
		height: "100%",
	},
	img: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.LightGray,
	},
	flex: {
		flex: 1,
	},
	todayFashion: {
		fontSize: FONTSIZE.Small,
		fontWeight: "bold",
		textAlign: "center",
	},
	textContainer: {
		backgroundColor: COLORS.LightMint,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.Mint,
		padding: 3,
		margin: 2,
	},
	text: {
		fontSize: FONTSIZE.ExtraSmall,
	},
});
