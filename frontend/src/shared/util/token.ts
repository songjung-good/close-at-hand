import { API } from "../axios/axios";
import { useIsLogin, useRefreshToken } from "../zustand/userStore";

export function getToken() {
	const { token } = useRefreshToken();
	const isLogin = useIsLogin();
	if (isLogin) {
		// refresh Token으로 access Token 얻기
	}
}
