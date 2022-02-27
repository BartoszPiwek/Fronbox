import webpack from "webpack";

export const imagesRules: webpack.RuleSetRule[] = [
	{
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'responsive-loader',
				options: {
					adapter: require('responsive-loader/sharp'),
					name: '[name].[ext]',
					outputPath: 'static/images',
					placeholder: true,
					placeholderSize: 50
				}
			},
		],
	}
]
