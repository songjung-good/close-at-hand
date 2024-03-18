import { FlatList, StyleSheet, Text } from "react-native";
import ReactCordiCard from "../cordiShared/RecentCordiCard";
import { useQuery } from "@tanstack/react-query";
import { fetchList } from "./API";
import { placeholderData } from "./constant";

const ClothesHistoryList = () => {
	const { data, isError, error } = useQuery({
		queryKey: ["clothesList"],
		queryFn: fetchList,
		placeholderData,
		staleTime: 1000 * 60 * 60 * 60, // 1시간
	});
	console.log(data);

	return (
		<>
			{data && (
				<FlatList
					horizontal={true}
					data={data}
					renderItem={({ item }) => <ReactCordiCard {...item} />}
				></FlatList>
			)}
			{isError && <Text>{error.message}</Text>}
		</>
	);
};

export default ClothesHistoryList;

const styles = StyleSheet.create({});
