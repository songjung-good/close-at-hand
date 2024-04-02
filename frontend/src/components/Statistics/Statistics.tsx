import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import Card from "./Card";
import { fetchMostClothes } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import { placeholderData } from "./constant";
import { FONTSIZE } from "../../shared";

interface Props {
	refreshing: boolean;
}

const MostClothes: React.FC<Props> = ({ refreshing }) => {
	const navigation = useNavigation<Navigation>();
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["mostclothes"],
		queryFn: fetchMostClothes,
		placeholderData,
	});

	useEffect(() => {
		refetch();
	}, [refreshing]);

	function hadlePress(clothesId: number) {
		navigation.navigate("1", { screen: "cloth", params: { id: clothesId } });
	}

	return (
		<View>
			{(isLoading || isError) && (
				<LoadingOrError error={error} isError={isError} isLoading={isLoading} />
			)}
			{data && data.top5UsedClothes ? (
				<FlatList
					horizontal={true}
					data={data.top5UsedClothes}
					renderItem={({ item }) => <Card {...item} onPress={hadlePress} />}
					keyExtractor={(item) => item.clothesId.toString()}
				/>
			) : (
				<Text style={styles.text}>저장된 데이터가 없습니다.</Text>
			)}
		</View>
	);
};

export default MostClothes;

const styles = StyleSheet.create({
	text: {
		fontSize: FONTSIZE.Medium,
		textAlign: "center",
	},
});
