import { FlatList, Image, StyleSheet, Text } from "react-native";

import CordiCard from "../cordiCard/CordiCard";
import { CoordyDetail } from "./types";

const DetailUI: React.FC<CoordyDetail> = ({ contains, outfitUrl, weather }) => {
	return (
		<>
			<Image source={{ uri: outfitUrl }} />
			<Text>{weather}</Text>
			<FlatList
				horizontal={true}
				data={contains}
				renderItem={({ item }) => (
					<CordiCard outfitId={item.outfitId} outfitUrl={item.outfitUrl} />
				)}
				keyExtractor={(item) => item.outfitId.toString()}
			></FlatList>
		</>
	);
};

export default DetailUI;

const styles = StyleSheet.create({});
