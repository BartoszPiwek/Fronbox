import { htmlTsxPlugins, htmlTsxRulesDev } from './builder/html-tsx.webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { scssPluginsProd, scssRulesProd } from './builder/scss.webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { tsRulesDev } from './builder/ts.webpack';

module.exports = merge(commonConfig, {
	// @ts-ignore
	optimization: {
		splitChunks: { chunks: "all" },
		moduleIds: 'named'
	},
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		...htmlTsxPlugins,
		...scssPluginsProd
	],
	module: {
		rules: [
			...scssRulesProd,
			htmlTsxRulesDev,
			...tsRulesDev,
		]
	}
})
