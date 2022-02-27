import webpack from "webpack";

export const tsRulesDev: webpack.RuleSetRule[] = [
	{
		test: /\.ts?$/,
		exclude: /(node_modules|bower_components)/,
		enforce: 'pre',
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			{
				loader: "ts-loader",
			},
		]
	}
]
