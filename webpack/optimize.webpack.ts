import PurgeCSSPlugin from 'purgecss-webpack-plugin';
import { glob } from "glob";
import path from "path";
import webpack from 'webpack';

const plugin = (mode: 'development' | 'production'): webpack.Plugin[] => {
  if (mode === 'development') {
    return []
  }

  return [
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'dist')}/**/*`, { nodir: true }),
    }),
  ]
};

export default { plugin }