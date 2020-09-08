import webpack from "webpack";

const moduleRule: webpack.RuleSetRule = {
  test: /\.ts?$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    },
    {
      loader: "ts-loader",
    }
  ]
}

const plugin = [
];

// @ts-ignore
export default { moduleRule, plugin }