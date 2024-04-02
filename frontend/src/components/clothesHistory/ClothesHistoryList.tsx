import { useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import CordiCard from "../coordyCard/CoordyCard";
import { fetchList } from "./API";
import { placeholderData } from "./constant";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import { FONTSIZE } from "../../shared";

interface Props {
	refreshing: boolean;
}
const ClothesHistoryList: React.FC<Props> = ({ refreshing }) => {
	const { data, isError, error, isLoading, refetch } = useQuery({
		queryKey: ["clothesList"],
		queryFn: fetchList,
		placeholderData,
	});

	useEffect(() => {
		refetch();
	}, [refreshing]);

	return (
		<>
			{data && data.length ? (
				<FlatList
					horizontal={true}
					data={data}
					renderItem={({ item }) => (
						<CordiCard {...item} noOnPress={isLoading} />
					)}
					keyExtractor={(item) => item.ootdId.toString()}
				/>
			) : (
				<Text style={styles.text}>저장된 최근 코디가 없습니다.</Text>
			)}
			{(isError || isLoading) && (
				<LoadingOrError isLoading={false} isError={isError} error={error} />
			)}
		</>
	);
};

export default ClothesHistoryList;

const styles = StyleSheet.create({
	text: {
		fontSize: FONTSIZE.Medium,
		textAlign: "center",
	},
});
