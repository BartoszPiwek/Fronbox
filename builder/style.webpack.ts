import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import globImporter from 'node-sass-glob-importer';
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postCSSModules from "postcss-modules";
import fs from 'fs';
import path from 'path';

const moduleRule = (mode: string): webpack.RuleSetRule => {
  return {
    test: /\.(sass|scss)$/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              // autoprefixer(),
              // cssnano(),
              postCSSModules({
                scopeBehaviour: "local",
                exportGlobals: true,
                getJSON: function (name, json, outputFileName) {
                  if (!/components/.test(path.dirname(name))) {
                    return;
                  }

                  const cssName = path.basename(`${name}`)
                  const jsonFileName = path.resolve(
                    `${path.dirname(name)}/${
                    cssName.split('.')[0]
                    }.scss.json`
                  )

                  fs.writeFileSync(jsonFileName, JSON.stringify(json))
                },
                generateScopedName(name: string, filePath: string) {
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
      }
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