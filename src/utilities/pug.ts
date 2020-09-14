type TCreateTagClassNames = {
  [key: string]: Array<{
    [key: string]: boolean | string
  }>
}

export const createTagClassNames = (data: TCreateTagClassNames): string | string[] => {
  return Object.entries(data).map(([type, typeData]) => {
    if (!typeData) {
      return;
    }

    if (typeof typeData === 'string') {
      return `${type}-${typeData}`;
    }

    return Object.entries(typeData).map(([option, value]) => {
      if (!value) {
        return;
      }

      if (typeof value === 'boolean' && value) {
        return `${type}-${option}`;
      }

      return `${type}-${value}`;
    }).filter(element => element !== undefined).flat();
  }).filter(element => element !== undefined).flat();
}

export const createStyle = (componentName: string) => {
  return (value: string[] | string): string => {
    if (typeof value === 'string') {
      value = value.split(', ');
    }

    return value.map(element => {
      return `${componentName}_${element}`;
    }).join(' ');
  }
}