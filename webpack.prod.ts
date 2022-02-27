import { htmlTsxPlugins, htmlTsxRulesDev } from './webpack/html-tsx.webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { scssPluginsProd, scssRulesProd } from './webpack/scss.webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { tsRulesDev } from './webpack/ts.webpack';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

module.exports = merge(commonConfig, {
	// @ts-ignore
	optimization: {
		splitChunks: { chunks: 'all' },
		moduleIds: 'named',
	},
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		...htmlTsxPlugins,
		...scssPluginsProd,
		new ImageMinimizerPlugin({
			minimizerOptions: {
				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					['gifsicle', { interlaced: true }],
					['jpegtran', { progressive: true }],
					['optipng', { optimizationLevel: 5 }],
					[
						'svgo',
						{
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					],
				],
			},
		}),
	],
	module: {
		rules: [...scssRulesProd, htmlTsxRulesDev, ...tsRulesDev],
	},
});
