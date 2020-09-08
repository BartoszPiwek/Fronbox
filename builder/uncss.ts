import { glob } from 'glob';
import uncss from "uncss";

uncss(
  glob.sync(`./dist/**/*.html`), {
  csspath: './dist/',
  htmlroot: './dist/',
  jsdom: {
    runScripts: 'outside-only'
  },
  ignoreSheets: [/fonts.googleapis/],
  ignore: [
    /\.is/
  ],
  report: true,
}, (error, output) => {
  console.log(output);
});