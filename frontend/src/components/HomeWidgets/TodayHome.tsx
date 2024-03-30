import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import AntDesign from "react-native-vector-icons/AntDesign";

import { COLORS, LaundryDB } from "../../shared";
import { TodayResponse, fetchToday } from "./API";
import { useRealm } from "@realm/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ImageProps {
	imageUrl: string;
	looks: string[];
}

const DataExist: React.FC<ImageProps> = ({ imageUrl }) => {
	return (
		<View testID="data-box">
			<Image style={styles.img} source={{ uri: imageUrl }} />
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
			content = <StyledText content={data.message} />;
		} else {
			content = (
				<DataExist imageUrl={data.ootdImgUrl} looks={data.clothes[0].looks} />
			);

			function saveDB(data: TodayResponse) {
				data.clothes.forEach((e) => {
					let texture = 0;
					for (let element of e.texture) {
						if (/울|캐시미어/.test(element)) {
							texture = 1;
							break;
						}
					}

					realm.write(() => {
						realm.create(
							"LaundryDB",
							LaundryDB.generate(
								e.clothesId,
								e.clothesImgUrl,
								texture,
								new Date(e.lastWashDate),
							),
						);
					});
				});
			}

			async function check(data: TodayResponse) {
				const lastSave = await AsyncStorage.getItem("lastSave");

				const today = new Date().toISOString().split("T")[0];

				if (lastSave !== today) {
					saveDB(data);
				}
				await AsyncStorage.setItem("lastSave", today);
			}

			check(data);
		}
	}

	if (isLoading) {
		content = (
			<StyledText
				content={"데이터를 받아 오는 중입니다. \n 잠시만 기다려 주세요"}
			/>
		);
	} else if (isError) {
		content = (
			<StyledText content={error.message ?? "인터넷 연결을 확인하여 주세요"} />
		);
	}

	return (
		<Pressable
			style={styles.container}
			onPress={handlePress}
			testID="pressible"
		>
			<View style={styles.innerContainer}>
				<AntDesign name="pluscircle" size={80} color={COLORS.PurpleBlue} />
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
	img: {
		resizeMode: "contain",
	},
});
