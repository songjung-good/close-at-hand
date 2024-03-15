module.exports = {
	expo: {
		name: "Front",
		slug: "Front",
		version: "0.0.1",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			package: "com.closeAtHand",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			storybookEnabled: "process.env.STORYBOOK_ENABLED",
		},
		plugins: [
			[
				"expo-secure-store",
				{
					faceIDPermission: "Face ID를 사용하기 위해 권한을 허용해주세요.",
				},
			],
		],
	},
};
