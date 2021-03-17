import React from 'react'
import cn from 'classnames'

export interface IImageElement {
	image: {
		placeholder: string
		width: number
		height: number
		src: string
		images: Array<{
			path: string
		}>
	}
	alt: string

	isLazyload?: boolean
	isBackground?: boolean
	hasRetina?: boolean
}

export const ImageElement = (params: IImageElement) => {
	const { alt, isLazyload = true, image } = params

	const { width, height, images, src } = image
	const ratio = (height / width) * 100 + '%'

	const srcSet = images
		.map((item, index) => {
			return `${item.path} ${index + 1}x`
		})
		.join(', ')

	return (
		<div className={cn('image')}>
			<div className="image__wrapper" style={{ paddingBottom: ratio }}>
				<img
					className={cn('image__image', { lazyload: isLazyload })}
					src={!isLazyload ? src : image.placeholder}
					data-srcSet={
						(isLazyload && images.length > 1 && srcSet) || null
					}
					loading={isLazyload ? 'lazy' : null}
					data-src={isLazyload && src}
					alt={alt}
				/>
			</div>
		</div>
	)
}
