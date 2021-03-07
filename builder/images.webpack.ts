import webpack from "webpack";

export const imagesRules: webpack.RuleSetRule[] = [
	{
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					esModule: false,
					name: '[name][hash].[ext]',
					outputPath: 'static/images'
				},
			},
			{ loader: "webpack-image-resize-loader" },
		],
	}
]
