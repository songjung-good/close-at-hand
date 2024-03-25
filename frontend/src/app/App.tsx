import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RealmProvider } from "@realm/react";

import AppNav from "./navigation/AppNav";
import { queryClient, useUserActions } from "../shared/index";
import { LaundryDB } from "../shared/DB-Realm/realm";

export default function App() {
	const { setRefreshToken } = useUserActions();

	useEffect(() => {
		async function getLoginInfo() {
			try {
				const token = await AsyncStorage.getItem("CloseAtHandrefreshToken");
				const exp = await AsyncStorage.getItem("CloseAtHandrefreshTokenExp");
				if (token && exp) {
					setRefreshToken({ token, exp });
					// access Token을 얻는 로직 작성
				}
			} catch (error) {
				console.log(error);
			}
		}

		getLoginInfo();
	}, []);

	return (
		<RealmProvider schema={[LaundryDB]}>
			<QueryClientProvider client={queryClient}>
				<AppNav />
			</QueryClientProvider>
		</RealmProvider>
	);
}
