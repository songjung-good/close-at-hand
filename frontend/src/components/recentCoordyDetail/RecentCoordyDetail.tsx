import { useQuery } from "@tanstack/react-query";

import { fetchDetail } from "./API";
import LoadingOrError from "../fetchHelper/LoadingOrError";
import DetailUI from "./DetailUI";

interface Props {
	ootdId: number;
}

const RecentCoordyDetail: React.FC<Props> = ({ ootdId }) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["recentCoordyList", ootdId],
		queryFn: async ({ signal }) => fetchDetail({ signal, ootdId }),
	});
	console.log(data);
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
