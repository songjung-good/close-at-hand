import { FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchCoordyList } from "./API";
import CordiCard from "../cordiCard/CordiCard";
import LoadingOrError from "../fetchHelper/LoadingOrError";

const CoordyList = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList"],
		queryFn: fetchCoordyList,
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

export default CoordyList;
