import { FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchRecentCoordyListList } from "./API";
import CordiCard from "../coordyCard/CoordyCard";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const RecentCoordyList = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList"],
		queryFn: fetchRecentCoordyListList,
	});

	return (
		<>
			{(isLoading || isError) && (
				<LoadingOrError isLoading={isLoading} isError={isError} error={error} />
			)}
			{data && (
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<CordiCard {...item} widthMathToScreen={true} />
					)}
					keyExtractor={(item) => item.outfitId.toString()}
					numColumns={3}
				/>
			)}
		</>
	);
};

export default RecentCoordyList;
