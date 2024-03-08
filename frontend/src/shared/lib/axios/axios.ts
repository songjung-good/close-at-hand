import axios from "axios";

const API = axios.create({
	baseURL: process.env.EXPO_PUBLIC_URL,
	withCredentials: true,
});
