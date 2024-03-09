import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/shared/lib/tanstackquery/tanstackQuery";

import Index from "./src/app/example/Index";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Index />
		</QueryClientProvider>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
