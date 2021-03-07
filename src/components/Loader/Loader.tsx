import React from 'react'
import cn from 'classnames'

export interface ILoader {
	size?: 'default'
	isCentered?: boolean
	isFixed?: boolean
}

export const Loader = (params: ILoader) => {
	const { size = 'default', isCentered = false, isFixed = false } = params

	return (
		<div
			className={cn(
				'loader',
				`loader--size-${size}`,
				{ 'loader--type-centered': isCentered || isFixed },
				{ 'loader--type-fixed': isFixed }
			)}
		>
			<div className="loader__content">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}
