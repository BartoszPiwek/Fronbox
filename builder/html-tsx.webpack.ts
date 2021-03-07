import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackInlineSVGPlugin from 'html-webpack-inline-svg-plugin';

export const htmlTsxRulesDev: webpack.RuleSetRule = {
	test: /\.tsx$/,
	use: [
		{
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-typescript', '@babel/preset-react']
			}
		}
	],
}

export const htmlTsxPlugins = [
	new HTMLWebpackPlugin({
		filename: 'index.html',
		template: './src/pages/homepage/homepage.page.tsx',
		inject: true,
		hash: true,
		cache: true
	}),
	new HtmlWebpackInlineSVGPlugin()
]
