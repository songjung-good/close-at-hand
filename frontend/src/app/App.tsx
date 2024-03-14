import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getGenericPassword } from "react-native-keychain";
import AppNav from "./navigation/AppNav";

import { queryClient, useUserActions } from "../shared/index";

export default function App() {
	const { setRefreshToken } = useUserActions();

	useEffect(() => {
		async function getLoginInfo() {
			try {
				const credentials = await getGenericPassword();
				if (credentials) {
					setRefreshToken({ token: credentials.password, exp: "" });
					// access Token을 얻는 로직 작성
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
