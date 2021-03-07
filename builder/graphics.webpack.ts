import webpack from "webpack";

export const graphicsRules: webpack.RuleSetRule[] = [
	{
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					esModule: false,
					name: '[name][hash].[ext]'
				},
			},
			{ loader: "webpack-image-resize-loader" },
		],
	}
]
