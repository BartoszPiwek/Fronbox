import React from 'react';

export interface IIcon {
	file: string;
	width?: number;
	height?: number;
}

export const Icon = (params: IIcon) => {
	const { file, width, height } = params;

	const iconTemplate = require(`@icons/${file}.svg`) as string;

	return (
		<div
			className="icon"
			style={{
				width,
				height,
			}}
			dangerouslySetInnerHTML={{
				__html: iconTemplate
					.replace('<svg', `<svg class="icon__asset"`)
					.replace(`xmlns="http://www.w3.org/2000/svg"`, ''),
			}}
		></div>
	);
};
