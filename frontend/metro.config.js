const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { generate } = require("@storybook/react-native/scripts/generate");

generate({
	configPath: path.resolve(__dirname, "./.storybook"),
});

module.exports = (async () => {
	const config = await getDefaultConfig(__dirname);
	config.transformer.unstable_allowRequireContext = true;
	config.resolver.sourceExts.push("mjs");

	// Add SVG support
	const {
		resolver: { sourceExts, assetExts },
	} = config;
	config.transformer.babelTransformerPath = require.resolve(
		"react-native-svg-transformer",
	);
	config.resolver.assetExts = assetExts.filter((ext) => ext !== "svg");
	config.resolver.sourceExts = [...sourceExts, "svg"];

	return config;
})();
