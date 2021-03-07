import React, { ReactNode } from 'react'
import cn from 'classnames'

interface ILink {
	children?: ReactNode
	className?: string
	attr?: string
	size?: 'default'
	color?: 'primary'
	tag?: 'a' | 'button'
}

export const Link = (params: ILink) => {
	const {
		children,
		tag = 'a',
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
				'link',
				`link--size-${size}`,
				`link--color-${color}`
			)}
			type={type}
		>
			{children}
		</ElementTag>
	)
}
