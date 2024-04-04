module.exports = {
	expo: {
		name: "Close At Hand",
		slug: "close-at-hand",
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
		},
		android: {
			versionCode: 1,
			package: "com.closeAtHand",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-iconA.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			storybookEnabled: "process.env.STORYBOOK_ENABLED",
			eas: {
				projectId: "f3d1051a-5df5-4914-9071-3b8c233ece52",
			},
		},
	},
};
