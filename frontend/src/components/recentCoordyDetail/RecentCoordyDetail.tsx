import { useQuery } from "@tanstack/react-query";
import { fetchDetail } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import DetailUI from "./DetailUI";

interface Props {
	outfitId: number;
}

const RecentCoordyDetail: React.FC<Props> = ({ outfitId }) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList", outfitId],
		queryFn: fetchDetail.bind(this, outfitId),
	});
	return (
		<>
			{(isLoading || isError) && (
				<LoadingOrError isLoading={isLoading} isError={isError} error={error} />
			)}
			{data && <DetailUI {...data} />}
		</>
	);
};

export default RecentCoordyDetail;
