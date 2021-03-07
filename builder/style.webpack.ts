import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postCSSModules from "postcss-modules";
import globImporter from 'node-sass-glob-importer';

const moduleRule = (mode: string): webpack.RuleSetRule => {
	return {
		test: /\.scss$/,
		enforce: 'pre',
		use: [
			'style-loader',
			mode === 'production' ? MiniCssExtractPlugin.loader : null,
			{
				loader: 'css-loader',
				options: { importLoaders: 1 }
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							mode === 'production' ? autoprefixer() : null,
							mode === 'production' ? cssnano() : null,
						]
					}
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						importer: globImporter()
					},
				}
			},
			// 'webpack-import-glob-loader',
		]
	}
}

const plugin = [
	new MiniCssExtractPlugin({
		filename: "[name].[hash].css",
		chunkFilename: '[id].[hash].css',
	}),
]

export default { moduleRule, plugin }
