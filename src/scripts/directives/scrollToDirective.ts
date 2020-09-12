import { getElements, getElement } from "../tools/DOM";
import { browser } from "../app";

export const scrollToDirectiveInit = () => {
  const elements = getElements('[data-scroll-to]');

  if (!elements.length) {
    return;
  }

  elements.forEach(element => {
    element.addEventListener('click', () => {
      const targetEl = getElement(element.dataset.scrollTo);

      browser.scrollTo({
        element: targetEl
      });
    })
  })
}