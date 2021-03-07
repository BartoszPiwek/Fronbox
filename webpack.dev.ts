import { htmlTsxPlugins, htmlTsxRulesDev } from './builder/html-tsx.webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { scssRulesDev } from './builder/scss.webpack';
import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import { tsRulesDev } from './builder/ts.webpack';
import webpack from 'webpack';
import path from 'path';
import { faviconPlugins } from './builder/favicon.webpack';

module.exports = merge(commonConfig, {
	// @ts-ignore
	stats: 'errors-only',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		port: 8080,
		disableHostCheck: true,
		contentBase: "src/**/*.(tsx|ts)",
		watchContentBase: true,
	},
	plugins: [
		...htmlTsxPlugins,
		...faviconPlugins,
		new FriendlyErrorsPlugin({
			clearConsole: true,
		}),
	],
	module: {
		rules: [
			...scssRulesDev,
			...tsRulesDev,
			htmlTsxRulesDev
		]
	}
})
