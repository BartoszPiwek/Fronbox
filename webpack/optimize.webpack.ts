import PurgeCSSPlugin from 'purgecss-webpack-plugin';
import { glob } from "glob";
import webpack from 'webpack';
import { whitelistPatterns } from "./../purgerCSS";

const plugin = (mode: 'development' | 'production'): webpack.Plugin[] => {
  if (mode === 'development') {
    return []
  }

  const allFiles = glob.sync('./src/**/*', { nodir: true });

  return [
    new PurgeCSSPlugin({
      whitelistPatterns,
      paths: allFiles,
    }),
  ]
};

export default { plugin }