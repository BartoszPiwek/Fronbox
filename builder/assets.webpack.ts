import webpack from "webpack";
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const moduleRule: webpack.RuleSetRule = {
	test: /\.(png|jpe?g|gif)$/i,
	use: [
		{
			loader: 'file-loader',
			options: {
				esModule: false,
				name: '[name].[hash].[ext]',
				// outputPath: 'static/images'
			}
		},
		// {
		//   loader: 'img-loader',
		//   options: {
		//     plugins: process.env.NODE_ENV === 'production' && [
		//       require('imagemin-giflossy')({
		//         optimizationLevel: 3,
		//         optimize: 3,
		//         lossy: 2
		//       }),
		//       require('imagemin-mozjpeg')({
		//         quality: 90
		//       }),
		//       require('imagemin-pngquant')({
		//         speed: 1,
		//         quality: [0.95, 1]
		//       }),
		//     ]
		//   }
		// }
	],
};

const plugin: Array<any> = [
	// new FaviconsWebpackPlugin({
	//   logo: './src/static/favicon.png',
	//   cache: true,
	//   inject: true,
	//   prefix: 'static/favicons',
	// })
]

export default { moduleRule, plugin }
