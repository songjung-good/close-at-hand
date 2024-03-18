import { FlatList, StyleSheet } from "react-native";
import ReactCordiCard from "../cordiCard/RecentCordiCard";
import { useQuery } from "@tanstack/react-query";
import { fetchList } from "./API";
import { placeholderData } from "./constant";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const ClothesHistoryList = () => {
	const { data, isError, error } = useQuery({
		queryKey: ["clothesList"],
		queryFn: fetchList,
		placeholderData,
		staleTime: 1000 * 60 * 60 * 60, // 1시간
	});

	return (
		<>
			{data && (
				<FlatList
					horizontal={true}
					data={data}
					renderItem={({ item }) => <ReactCordiCard {...item} />}
					keyExtractor={(item) => item.outfitId.toString()}
				></FlatList>
			)}
			{isError && (
				<LoadingOrError
					isLoading={false}
					isError={isError}
					error={error}
				></LoadingOrError>
			)}
		</>
	);
};

export default ClothesHistoryList;

const styles = StyleSheet.create({});
