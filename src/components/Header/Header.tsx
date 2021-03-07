import React from 'react'
import cn from 'classnames'

interface IHeader {
	className?: string
}

export const Header = (params: IHeader) => {
	return <header className={cn('header', 'sticky')}></header>
}
