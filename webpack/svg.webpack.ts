import webpack from "webpack";

const moduleRule: webpack.RuleSetRule = {
  test: /\.(svg)$/i,
  loader: 'svg-inline-loader'
};

const plugin: Array<any> = []

export default { moduleRule, plugin }
