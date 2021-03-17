import React, { ReactNode } from 'react'
import cn from 'classnames'

interface IButton {
	children?: ReactNode
	className?: string
	attr?: string
	size?: 'default'
	color?: 'primary'
	tag?: 'button' | 'a'
}

export const Button = (params: IButton) => {
	const {
		children,
		tag = 'button',
		className,
		color = 'primary',
		size = 'default',
	} = params

	const ElementTag = tag
	const type = tag === 'button' ? 'button' : null

	return (
		<ElementTag
			className={cn(
				className,
				'button',
				`button--size-${size}`,
				`button--color-${color}`
			)}
			type={type}
		>
			{children}
		</ElementTag>
	)
}
