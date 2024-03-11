import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/index";
import AppNav from "./Navigation/AppNav";

export default function main() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppNav />
		</QueryClientProvider>
	);
}
