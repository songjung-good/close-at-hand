import { FlatList } from "react-native";
import CordiCard from "../cordiCard/CordiCard";
import { useQuery } from "@tanstack/react-query";
import { fetchList } from "./API";
import { placeholderData } from "./constant";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const ClothesHistoryList = () => {
	const { data, isError, error, isLoading } = useQuery({
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
					renderItem={({ item }) => (
						<CordiCard {...item} noOnPress={isLoading} />
					)}
					keyExtractor={(item) => item.outfitId.toString()}
				/>
			)}
			{isError && (
				<LoadingOrError isLoading={false} isError={isError} error={error} />
			)}
		</>
	);
};

export default ClothesHistoryList;
