import path from 'path';

export const hasCssModules = (value: string) => {
  return new RegExp(`(components|modules)`).test(path.dirname(value));
}

export const isDynamicClass = (value: string) => {
  return new RegExp(`^(is|has)[a-zA-Z]`).test(path.dirname(value));
}

type TCreateTagClassNames = {
  [key: string]: Array<{
    [key: string]: boolean | string
  }>
}

export const createTagClassNames = (componentName: string, data: TCreateTagClassNames): string => {
  const styles = require(`@components/${componentName}/${componentName}.scss.json`);

  return Object.entries(data).map(([type, typeData]) => {
    if (!typeData) {
      return;
    }

    if (typeof typeData === 'string') {
      return styles[`${type}-${typeData}`];
    }

    return Object.entries(typeData).map(([option, value]) => {
      if (!value) {
        return;
      }

      if (typeof value === 'boolean' && value) {
        return styles[`${type}-${option}`];
      }

      return styles[`${type}-${value}`];
    }).filter(element => element !== undefined).join(' ');
  }).filter(element => element !== undefined).join(' ');
}

export const loadStyle = (value: string) => {
  return require(`@components/${value}/${value}.scss.json`);
}