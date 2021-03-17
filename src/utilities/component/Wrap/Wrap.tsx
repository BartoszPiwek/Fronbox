import React, { ReactNode } from 'react'
import cn from 'classnames'

export interface IWrap {
	children?: ReactNode

	size?: 'default'
}

export const Wrap = (params: IWrap) => {
	const { children, size = 'default' } = params

	return <div className={cn('wrap', `wrap--size-${size}`)}>{children}</div>
}
