/**
 * @type {import('@react-native-esbuild/core').Config}
 */
exports.default = {
	transformer: {
		additionalTransformRules: {
			babel: [
				{
					/**
					 * @param path file path
					 * @param code raw source code
					 * @returns true: transform, false: do not transform
					 **/
					test: (path, code) => {
						return shouldApplyTransformation;
					},
					/**
					 * Babel options
					 **/
					options: babelOptions,
					// it can be function that return babel options.
					options: (path, code) => babelOptions,
				},
			],
		},
	},
};
