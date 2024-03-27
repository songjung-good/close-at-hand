module.exports = {
	expo: {
		name: "Close At Hand",
		slug: "Close At Hand",
		version: "0.0.1",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splashA.png",
			resizeMode: "contain",
			backgroundColor: "#fdd087",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			splash: {
				image: "./assets/splashA.png",
				resizeMode: "contain",
				backgroundColor: "#fdd087",
			},
		},
		android: {
			package: "com.closeAtHand",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-iconA.png",
				backgroundColor: "#ffffff",
			},
			splash: {
				image: "./assets/splashA.png",
				resizeMode: "contain",
				backgroundColor: "#fdd087",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			storybookEnabled: "process.env.STORYBOOK_ENABLED",
		},
	},
};
