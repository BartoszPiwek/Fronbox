import { imagesRules } from './webpack/images.webpack';
import * as path from 'path';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export default {
	resolve: {
		unsafeCache: true,
		symlinks: false,
		extensions: ['.ts', '.js', '.tsx', '.png'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@templates': path.resolve(__dirname, 'src/template/'),
			'@icons': path.resolve(__dirname, 'src/static/icons/'),
			'@images': path.resolve(__dirname, 'src/static/images/'),
			'@utilities': path.resolve(__dirname, 'src/utilities/'),
			'@modals': path.resolve(__dirname, 'src/modals/'),
			'@styles': path.resolve(__dirname, 'src/style/'),
		},
	},
	watchOptions: {
		poll: true,
		ignored: '/node_modules/',
	},
	target: 'web',
	entry: ['./src/index.ts', './src/styles.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[chunkhash].bundle.js',
		publicPath: '',
	},
	module: {
		rules: [
			...imagesRules,
			{
				test: /\.(svg)$/i,
				loader: 'raw-loader',
				options: {
					esModule: false,
				},
			},
		],
	},
	plugins: [
		new FaviconsWebpackPlugin({
			logo: './src/static/favicon.png',
			outputPath: 'static/favicons',
			cache: true,
			inject: true,
			publicPath: 'static/favicons',
			prefix: '',
		}),
	],
};
