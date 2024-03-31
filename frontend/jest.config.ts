module.exports = {
	preset: "react-native",
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@notifee|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
	],
	setupFiles: [
		"./__mocks__/@react-native-async-storage/async-storage.js",
		"./__mocks__/@notifee/react-native.js",
		"./__mocks__/realm/realmMocking.js",
		"./__mocks__/react-native-permissions/react-native-permissions.js",
	],
};
