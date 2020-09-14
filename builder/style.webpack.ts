import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import globImporter from 'node-sass-glob-importer';
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postCSSModules from "postcss-modules";
import path from 'path';
import { hasCssModules, isDynamicClass } from "../src/utilities/style";

const moduleRule = (mode: string): webpack.RuleSetRule => {
  return {
    test: /\.(sass|scss)$/,
    enforce: 'pre',
    use: [
      'style-loader',
      // mode === 'production' ? MiniCssExtractPlugin.loader : null,
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              mode === 'production' ? autoprefixer() : null,
              mode === 'production' ? cssnano() : null,
              postCSSModules({
                scopeBehaviour: "local",
                getJSON: () => { },
                generateScopedName(name: string, filePath: string) {
                  if (!hasCssModules(filePath) || isDynamicClass(name)) {
                    return name;
                  }

                  const filename = path.basename(filePath, ".scss");

                  return `${filename}_${name}`;
                },
              }),
            ]
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            importer: globImporter()
          },
          additionalData: `
            @import '~@bpiwek/frontbox-style';
            @import '@styles/variables';
          `
        }
      },
      'import-glob',
    ]
  }
}

const plugin = [
  new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: '[id].[hash].css',
  }),
]

export default { moduleRule, plugin }