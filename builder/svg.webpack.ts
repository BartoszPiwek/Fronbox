import webpack from "webpack";

export const svgRules: webpack.RuleSetRule[] = [
	{
		test: /\.(svg)$/i,
		loader: 'svg-inline-loader'
	}
]
