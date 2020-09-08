export const getElementID = (value: string): HTMLElement => {
  return document.getElementById(value);
}

export const getElements = (value: string, element?: HTMLElement): NodeListOf<HTMLElement> => {
  if (element) {
    return element.querySelectorAll(value);
  }

  return document.querySelectorAll(value);
}

export const getElement = (value: string, element?: HTMLElement): HTMLElement => {
  if (element) {
    return element.querySelector(value);
  }

  return document.querySelector(value);
}