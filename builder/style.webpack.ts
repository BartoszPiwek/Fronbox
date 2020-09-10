import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import globImporter from 'node-sass-glob-importer';
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postCSSModules from "postcss-modules";
import fs from 'fs';
import path from 'path';
import { hasCssModules, isDynamicClass } from "../src/utilities/pugComponents";

const moduleRule = (mode: string): webpack.RuleSetRule => {
  return {
    test: /\.(sass|scss)$/,
    enforce: 'pre',
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
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
                exportGlobals: true,
                getJSON: function (filePath: string, json, outputFileName) {
                  if (!hasCssModules(filePath)) {
                    return;
                  }

                  const cssName = path.basename(`${filePath}`)
                  const jsonFileName = path.resolve(
                    `${path.dirname(filePath)}/${
                    cssName.split('.')[0]
                    }.scss.json`
                  )

                  fs.writeFileSync(jsonFileName, JSON.stringify(json))
                },
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