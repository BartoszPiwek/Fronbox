import uncss from "uncss";
import { glob } from "glob";
import fs from "fs";

const options = {
  banner: false,
  csspath: './dist',
  htmlroot: './dist',
  ignoreSheets: [/fonts.googleapis/],
  jsdom: {
    runScripts: 'outside-only'
  },
  stylesheet: glob.sync('./dist/**/*.css'),
  report: false,
  strictSSL: true,
  timeout: 1000,
  uncssrc: '.uncssrc',
};

const htmlFiles = glob.sync('./dist/**/*.html');
const cssFiles = glob.sync('./dist/**/*.css');

uncss(htmlFiles, options, function (error, output) {
  if (error) {
    console.error(error);

    return;
  }

  fs.writeFile(cssFiles[0], output, () => { });
});