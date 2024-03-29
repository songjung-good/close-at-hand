import axios from "axios";
import { useUser } from "../zustand/userStore";

const URL = process.env.API_URL;

export const API = axios.create({
	baseURL: URL,
	withCredentials: true,
});

API.interceptors.request.use(function (config) {
	console.log("요청", config);
	config.headers.Authorization = useUser.getState().accessToken;
	return config;
});

API.interceptors.response.use(function (response) {
	console.log("응답", response);
	return response;
});
