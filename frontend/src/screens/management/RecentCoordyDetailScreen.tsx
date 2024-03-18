import { StyleSheet } from "react-native";
import { RecentCoordyDetail } from "../../components";

const RecentCoordyDetailScreen: React.FC<
	RootRouteProp<"recentCoordyDetail">
> = ({ route }) => {
	return (
		<>
			<RecentCoordyDetail outfitId={route.params.outfitId} />
			<></>
		</>
	);
};

export default RecentCoordyDetailScreen;

const styles = StyleSheet.create({});
