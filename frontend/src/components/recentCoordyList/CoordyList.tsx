import { useQuery } from "@tanstack/react-query";
import { FlatList, StyleSheet } from "react-native";

import { fetchCoordyList } from "./API";
import ReactCordiCard from "../cordiCard/RecentCordiCard";
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
					renderItem={({ item }) => <ReactCordiCard {...item} />}
					keyExtractor={(item) => item.outfitId.toString()}
				/>
			)}
		</>
	);
};

export default CoordyList;

const styles = StyleSheet.create({});
