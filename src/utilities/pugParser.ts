export const createArrayString = (value: string | string[]): string[] => {
  switch (typeof value) {
    case 'string':
      return value.split(', ');
    case 'object':
      return [...value];
    default:
      return [];
  }
}

type TCreateClassNames = {
  [key: string]: Array<{
    [key: string]: boolean | string
  }>
}

export const createClassNames = (componentName: string, data: TCreateClassNames): string => {
  return Object.entries(data).map(([type, typeData]) => {
    if (!typeData) {
      return;
    }


    if (typeof typeData === 'string') {
      return `${componentName}--${type}-${typeData}`
    }

    return Object.entries(typeData).map(([option, value]) => {
      if (!value) {
        return;
      }

      if (typeof value === 'boolean' && value) {
        return `${componentName}--${type}-${option}`
      }

      return `${componentName}--${type}-${value}`
    }).filter(element => element !== undefined).join(' ');
  }).filter(element => element !== undefined).join(' ');
}

export const prefixClassNames = (className: string, data: Object): string[] => {
  return Object.entries(data).map(([key, values]) => {
    return values.map((value: string) => `${className}--${key}-${value}`).join(', ')
  });
}

interface IAttributeParse {
  [key: string]: string;
}

export const attributeParses = (data: IAttributeParse[]): any => {
  const map = Object.entries(data).map(([key, value]) => {
    return [
      `data-${key}`,
      typeof value === 'object' ? JSON.stringify(value).split(`"`).join(`&quot;`) : value
    ]
  });

  return Object.fromEntries(map);
}