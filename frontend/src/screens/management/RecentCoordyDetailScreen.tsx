import { RecentCoordyDetail } from "../../components";

const RecentCoordyDetailScreen: React.FC<
	RootScreenProp<"recentCoordyDetail">
> = ({ route }) => {
	return <RecentCoordyDetail ootdId={route.params.ootdId} />;
};

export default RecentCoordyDetailScreen;
