import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getGenericPassword } from "react-native-keychain";
import AppNav from "./Navigation/AppNav";

import { queryClient, useUserActions } from "../shared/index";

export default function App() {
	const { setRefreshToken } = useUserActions();
	useEffect(() => {
		async function getLoginInfo() {
			try {
				const credentials = await getGenericPassword();
				console.log(credentials);
				if (credentials) {
					setRefreshToken(credentials.password);
				}
			} catch (error) {
				console.log(error);
			}
		}

		getLoginInfo();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<AppNav />
		</QueryClientProvider>
	);
}
