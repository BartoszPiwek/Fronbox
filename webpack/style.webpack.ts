import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import globImporter from 'node-sass-glob-importer';

const moduleRule = (mode: string): webpack.RuleSetRule => {
  return {
    test: /\.(sass|scss)$/,
    use: [
      mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importer: globImporter()
          }
        }
      },
    ],
  }
}

const plugin = [
  new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: '[id].[hash].css',
  }),
]

export default { moduleRule, plugin }