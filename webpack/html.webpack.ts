import webpack from "webpack";
import * as glob from 'glob';
import HTMLWebpackPlugin from "html-webpack-plugin";
import * as path from 'path';
// @ts-ignore
import HtmlWebpackInlineSVGPlugin from 'html-webpack-inline-svg-plugin';

const moduleRule: webpack.RuleSetRule = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader",
      options: {
        data: {
          fs: require('fs'),
        },
        prettier: true
      },
    }
  ],
}

const pages = glob.sync('./src/pages/**/*.pug').map(
  (dir) => {
    const destFolder = path.dirname(dir).replace('./src/pages', './');
    const fileName = path.basename(dir.replace('.pug', ''));

    return new HTMLWebpackPlugin({
      filename: path.join(destFolder, fileName === 'index' ? '' : fileName, `index.html`),
      template: dir,
      inject: true,
      hash: false,
    })
  }
);

const modals = glob.sync('./src/modals/**/*.pug').map(
  (dir) => {
    const fileName = path.basename(dir).replace('.pug', '.html');

    return new HTMLWebpackPlugin({
      filename: path.join('./modals', fileName),
      template: dir,
      inject: false,
      hash: false,
    })
  }
);

const plugin = [
  ...pages,
  ...modals,
  new HtmlWebpackInlineSVGPlugin()
]

export default { moduleRule, plugin }
