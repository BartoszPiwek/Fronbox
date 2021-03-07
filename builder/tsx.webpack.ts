import webpack from "webpack";
import * as glob from 'glob';
import HTMLWebpackPlugin from "html-webpack-plugin";
import * as path from 'path';
import HtmlWebpackInlineSVGPlugin from 'html-webpack-inline-svg-plugin';
import homepagePage from "../src/pages/homepage/homepage.page";

const moduleRule: webpack.RuleSetRule = {
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

const pages = glob.sync('./src/pages/**/*.pug').map(
	(dir) => {
		const destFolder = path.dirname(dir).replace('./src/pages', './');
		const fileName = path.basename(dir.replace('.pug', ''));

		return new HTMLWebpackPlugin({
			filename: path.join(destFolder, fileName === 'index' ? '' : fileName, `index.html`),
			template: dir,
			inject: true,
			hash: false,
		})
	}
);

const modals = glob.sync('./src/modals/**/*.pug').map(
	(dir) => {
		const fileName = path.basename(dir).replace('.pug', '.html');

		return new HTMLWebpackPlugin({
			filename: path.join('./modals', fileName),
			template: dir,
			inject: false,
			hash: false,
		})
	}
);

const plugin = [
	// ...pages,
	// ...modals,
	new HTMLWebpackPlugin({
		filename: 'index.html',
		template: './src/pages/homepage/homepage.page.tsx',
		inject: true,
		hash: true,
	}),
	new HtmlWebpackInlineSVGPlugin()
]

export default { moduleRule, plugin }
