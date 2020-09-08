import { createArrayString, prefixClassNames } from "./pugParser";

interface IPugParseParamsInput {
  className: string | string[];
  style: string;
}

interface IPugParseParamsOutput {
  className?: string[];
  style: string;
}

export const parse = (prefix: string, params: Partial<IPugParseParamsInput>): IPugParseParamsOutput => {
  const { className, style } = params;

  return {
    className: [
      ...createArrayString(className),
    ],
    style
  };
}