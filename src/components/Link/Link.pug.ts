// import { createArrayString, prefixClassNames, attributeParses } from "../../utilities/pug";

// interface ILinkPugInput {
//   type?: string | string[];
//   size?: string | string[];
//   color?: string | string[];
//   href?: string;
//   linkType: 'email' | 'phone';
//   className?: string | string[];
//   tag?: 'a' | 'button';
//   attr?: Array<{ [key: string]: string }>;
// }

// interface ILinkPugOutput {
//   href?: string,
//   type?: string,
//   classNames?: string[],
//   attr?: Array<{ [key: string]: string }>,
//   tag: 'a' | 'button',
// }

// type TClassNames = {
//   color: string[];
//   size: string[];
//   type: string[];
// }

// export const parse = (params: ILinkPugInput): ILinkPugOutput => {
//   const {
//     href,
//     size = 'default',
//     color = 'default',
//     className,
//     attr,
//     tag = 'a',
//     linkType,
//     type = 'default'
//   } = params;

//   let classNames: Partial<TClassNames> = {
//     type: createArrayString(type),
//     color: createArrayString(color),
//     size: createArrayString(size),
//   };

//   let output: ILinkPugOutput = {
//     attr: attr && attributeParses(attr),
//     tag,
//   };

//   switch (tag) {
//     case 'a':
//       switch (linkType) {
//         case 'email':
//           output.href = `mailto:${href}`;
//           break;

//         case 'phone':
//           output.href = `tel:${href}`;
//           break;
//       }

//       output.href = output.href || href || '#';
//       break;

//     case 'button':
//       output.type = 'button';
//       break;
//   }

//   return {
//     ...output,
//     classNames: [
//       // ...prefixClassNames('link', classNames),
//       ...createArrayString(className)
//     ]
//   };
// }