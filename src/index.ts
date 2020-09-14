import './components/**/*.scss';
import './services/**/*.scss';

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  console.log(module.hot);
  // @ts-ignore
  module.hot.accept()
}