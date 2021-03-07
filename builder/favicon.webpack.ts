import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export const faviconPlugins = [
	new FaviconsWebpackPlugin({
		logo: './src/static/favicon.png',
		outputPath: 'static/favicons',
		cache: true,
		inject: true,
	})
]
