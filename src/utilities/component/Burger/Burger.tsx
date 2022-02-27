import React from 'react';
import cn from 'classnames';

interface IBurger {
	className?: string;
	attr?: { [key: string]: string };
}

export const Burger = (params: IBurger) => {
	const { className, attr } = params;

	return (
		<button
			type="button"
			className={cn(className, 'burger', 'click-expand')}
			{...attr}
		>
			<span></span>
		</button>
	);
};
