import React from 'react'
import cn from 'classnames'

export interface IImageElement {
	image: any
	retina?: any
	alt: string

	width: number
	height: number

	isLazyload?: boolean
	isBackground?: boolean
	hasRetina?: boolean
	hasPlaceholder?: boolean
}

export const ImageElement = (params: IImageElement) => {
	const {
		alt,
		isLazyload = true,
		width,
		height,
		hasPlaceholder = false,
		image,
	} = params

	const { src, srcSet } = image

	const paddingBottom = (height / width) * 100 + '%'

	return (
		<div className={cn('image')}>
			<div className="image__wrapper" style={{ paddingBottom }}>
				<img
					className={cn('image__image', { lazy: isLazyload })}
					src={
						!isLazyload ? src : hasPlaceholder && image.placeholder
					}
					data-srcSet={isLazyload && srcSet}
					loading={isLazyload ? 'lazy' : null}
					data-src={isLazyload && src}
					alt={alt}
				/>
			</div>
		</div>
	)
}
