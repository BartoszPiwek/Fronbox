import * as path from 'path';
import { faviconPlugins } from './builder/favicon.webpack';
import { graphicsRules } from './builder/graphics.webpack';
import { svgRules } from './builder/svg.webpack';

export default {
	resolve: {
		unsafeCache: true,
		symlinks: false,
		extensions: [".ts", ".js", ".tsx", ".png"],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@templates': path.resolve(__dirname, 'src/template/'),
			'@icons': path.resolve(__dirname, 'src/static/icons/'),
			'@images': path.resolve(__dirname, 'src/static/images/'),
			'@utilities': path.resolve(__dirname, 'src/utilities/'),
			'@modals': path.resolve(__dirname, 'src/modals/'),
			'@styles': path.resolve(__dirname, 'src/style/'),
		}
	},
	watchOptions: {
		poll: true,
		ignored: '/node_modules/',
	},
	target: 'web',
	entry: [
		'./src/index.ts',
		'./src/styles.scss'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[chunkhash].bundle.js',
		publicPath: '',
	},
	module: {
		rules: [
			...graphicsRules,
			...svgRules
		]
	},
	plugins: [
		...faviconPlugins,
	]
};
