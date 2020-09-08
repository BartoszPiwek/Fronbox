import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import globImporter from 'node-sass-glob-importer';
import * as uncss from 'uncss'
import { uncssIgnore, uncssIgnoreSheets } from "../uncss.config";

const moduleRule = (mode: string): webpack.RuleSetRule => {
  const use = [];

  if (mode === 'production') {
    use.push(MiniCssExtractPlugin.loader)
  } else {
    use.push('style-loader')
  }

  use.push('css-loader');

  if (mode === 'production') {
    use.push({
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')(),
            require('cssnano')({
              preset: [
                'default',
                {
                  discardComments: {
                    removeAll: true,
                  },
                },
              ],
            }),
            uncss.postcssPlugin({
              html: `./**/*.html`,
              ignore: uncssIgnore,
              ignoreSheets: uncssIgnoreSheets,
              htmlroot: `./dist/`,
              jsdom: {
                runScripts: 'outside-only'
              },
            }),
          ],
        },
      },
    })
  }

  use.push({
    loader: 'sass-loader',
    options: {
      sassOptions: {
        importer: globImporter()
      }
    }
  })

  return {
    test: /\.(sass|scss)$/,
    use
  }
}

const plugin = [
  new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: '[id].[hash].css',
  }),
]

export default { moduleRule, plugin }