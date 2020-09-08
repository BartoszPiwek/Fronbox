import { getElements } from "../tools/DOM";

export const initiator = (selector: string, callback: (element: HTMLElement) => void) => {
  const elements = getElements(`${selector}[data-on-init="true"]`);

  if (!elements.length) {
    return;
  }

  elements.forEach(element => {
    callback(element);
  });
}