import { RecentCoordyDetail } from "../../components";

const RecentCoordyDetailScreen: React.FC<
	RootScreenProp<"recentCoordyDetail">
> = ({ route }) => {
	return <RecentCoordyDetail outfitId={route.params.outfitId} />;
};

export default RecentCoordyDetailScreen;
