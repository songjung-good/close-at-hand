import { create } from "zustand";

type Token = {
	token: string;
	exp: string;
};

interface User {
	accessToken: Token;
	refreshToken: Token;
	nickName: string;
	actions: {
		setAccessToken: (token: User["accessToken"]) => void;
		setRefreshToken: (token: User["refreshToken"]) => void;
		getNickname: (nickname: User["nickName"]) => void;
	};
}

const useUser = create<User>((set) => ({
	accessToken: { token: "", exp: "" },
	refreshToken: { token: "", exp: "" },
	nickName: "",
	actions: {
		setAccessToken: (token) =>
			set((state) => ({
				...state,
				accessToken: token,
			})),
		setRefreshToken: (token) => {
			set((state) => ({
				...state,
				refreshToken: token,
			}));
		},
		getNickname(nickName) {
			set((state) => ({
				...state,
				nickName,
			}));
		},
	},
}));

export const useToken = () => useUser((state) => state.accessToken);
export const useRefreshToken = () => useUser((state) => state.refreshToken);
export const useNickName = () => useUser((state) => state.nickName);
export const useUserActions = () => useUser((state) => state.actions);

export const useIsLogin = () =>
	useUser((state) => new Date(state.refreshToken.exp) < new Date());
