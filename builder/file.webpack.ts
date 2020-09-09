import webpack from "webpack";
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const moduleRule: webpack.RuleSetRule = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        esModule: false,
        name: '[name][hash].[ext]'
      }
    },
  ],
};

const plugin: Array<any> = [
  new FaviconsWebpackPlugin({
    logo: './src/static/favicon.png',
    cache: true,
    inject: true,
  })
]

export default { moduleRule, plugin }
