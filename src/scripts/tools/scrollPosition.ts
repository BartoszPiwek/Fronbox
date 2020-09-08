export const scrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop;
}