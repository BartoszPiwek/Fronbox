import React from 'react'
import cn from 'classnames'

export interface IImageElement {
	src: string
	alt: string
	width: number
	height: number

	isLazyload?: boolean
	isBackground?: boolean
	hasRetina?: boolean
}

export const ImageElement = (params?: IImageElement) => {
	const { height, width, src, alt } = params
	const paddingBottom = (height / width) * 100 + '%'

	return (
		<div className={cn('image')}>
			<div className="image__wrapper" style={{ paddingBottom }}>
				<img className="image__image" data-src={src} alt={alt} />
			</div>
		</div>
	)
}
