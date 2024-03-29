import { create } from "zustand";

interface User {
	accessToken: string;
	refreshToken: string;
	nickName: string;
	actions: {
		setAccessToken: (token: User["accessToken"]) => void;
		setRefreshToken: (token: User["refreshToken"]) => void;
		getNickname: (nickname: User["nickName"]) => void;
	};
}

export const useUser = create<User>((set) => ({
	accessToken: "",
	refreshToken: "",
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
