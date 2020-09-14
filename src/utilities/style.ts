import path from "path";

export const hasCssModules = (value: string) => {
  return new RegExp(`(components|services)`).test(path.dirname(value));
}

export const isDynamicClass = (value: string) => {
  return /^(is|has)[a-zA-Z]/m.test(value);
}
