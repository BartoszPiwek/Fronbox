import { htmlTsxPlugins, htmlTsxRulesDev } from './webpack/html-tsx.webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { scssRulesDev } from './webpack/scss.webpack';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import { tsRulesDev } from './webpack/ts.webpack';
import { port, proxy } from './src/site';

module.exports = merge(commonConfig, {
	// @ts-ignore
	stats: 'errors-only',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		port: port,
		proxy: proxy,
	},
	plugins: [
		...htmlTsxPlugins,
		new FriendlyErrorsPlugin({
			clearConsole: true,
		}),
	],
	module: {
		rules: [...scssRulesDev, ...tsRulesDev, htmlTsxRulesDev],
	},
});
