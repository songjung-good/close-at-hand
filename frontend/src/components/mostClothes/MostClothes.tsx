import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchMostClothes } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import { useNavigation } from "@react-navigation/native";

const MostClothes = () => {
	const navigation = useNavigation<Navigation>();
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["mostclothes"],
		queryFn: fetchMostClothes,
	});

	function hadlePress(clothesId: number) {
		navigation.navigate("cloth", {
			id: clothesId,
		});
	}
	return (
		<View>
			{(isLoading || isError) && (
				<LoadingOrError error={error} isError={isError} isLoading={isLoading} />
			)}
			{data && (
				<FlatList
					horizontal={true}
					data={data}
					renderItem={({ item }) => <Card {...item} onPress={hadlePress} />}
					keyExtractor={(item) => item.clothesId.toString()}
				/>
			)}
		</View>
	);
};

export default MostClothes;

const styles = StyleSheet.create({});
