import webpack from "webpack";

const moduleRule: webpack.RuleSetRule = {
  test: /\.ts?$/,
  exclude: /(node_modules|bower_components)/,
  enforce: 'pre',
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    },
    {
      loader: "ts-loader",
    },
    'import-glob',
  ]
}

const plugin = [
];

// @ts-ignore
export default { moduleRule, plugin }