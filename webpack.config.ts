import * as path from 'path';
import * as webpack from 'webpack';
import CopyWebpackPlugin from "copy-webpack-plugin";
import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import style from "./builder/style.webpack";
import script from "./builder/script.webpack";
import html from "./builder/html.webpack";
import file from "./builder/file.webpack";
import svg from "./builder/svg.webpack";

// @ts-ignore
module.exports = (env, args): webpack.Configuration => {
  return {
    stats: {
      warnings: false,
      chunks: false
    },
    optimization: {
      splitChunks: { chunks: "all" }
    },
    resolve: {
      unsafeCache: true,
      symlinks: false,
      extensions: [".ts", ".js"],
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@templates': path.resolve(__dirname, 'src/template/'),
        '@icons': path.resolve(__dirname, 'src/static/icons/'),
        '@images': path.resolve(__dirname, 'src/static/images/'),
        '@utilities': path.resolve(__dirname, 'src/utilities/'),
        '@modals': path.resolve(__dirname, 'src/modals/'),
      }
    },
    devtool: args.mode !== 'production' ? 'source-map' : false,
    entry: [
      // './src/index.ts',
      './src/scripts/app.ts',
      './src/style/global.scss',
      './src/style/utilities.scss',
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        html.moduleRule,
        script.moduleRule,
        style.moduleRule(args.mode),
        file.moduleRule,
        svg.moduleRule
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/static/',
            to: './static/',
          }
        ]
      }),
      ...html.plugin,
      ...script.plugin,
      ...style.plugin,
      new FriendlyErrorsPlugin({
        clearConsole: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
