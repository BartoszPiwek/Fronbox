import HTMLWebpackPlugin from "html-webpack-plugin";

export const pages = [
	new HTMLWebpackPlugin({
		filename: 'index.html',
		template: './src/pages/homepage/homepage.page.tsx',
		inject: true,
		hash: true,
		cache: true
	}),
]
