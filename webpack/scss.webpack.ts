import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import sassGlobImporter from 'node-sass-glob-importer';
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export const scssRulesDev: webpack.RuleSetRule[] = [
	{
		test: /\.scss$/,
		enforce: 'pre',
		use: [
			{ loader: 'style-loader' },
			{
				loader: 'css-loader',
				options: { importLoaders: 1 },
			},
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						importer: sassGlobImporter()
					},
				}
			},
		]
	}
]

export const scssRulesProd: webpack.RuleSetRule[] = [
	{
		test: /\.scss$/,
		enforce: 'pre',
		use: [
			MiniCssExtractPlugin.loader,
			{ loader: 'css-loader' },
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							autoprefixer(),
							cssnano(),
						]
					}
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						importer: sassGlobImporter()
					},
				}
			},
		]
	}
]

export const scssPluginsProd = [
	new MiniCssExtractPlugin({
		filename: "[name].[contenthash].css",
		chunkFilename: '[id].[contenthash].css',
	}),
]
