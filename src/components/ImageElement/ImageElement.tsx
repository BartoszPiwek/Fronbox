import React from 'react'
import cn from 'classnames'

export interface IImageElement {
	src: string
	alt: string

	isLazyload?: boolean
	isBackground?: boolean
	hasRetina?: boolean
}

export const ImageElement = (params: IImageElement) => {
	const { src, alt, isLazyload, isBackground, hasRetina } = params

	// const { width, height } = imageSize(src)

	return (
		<div className={cn('image')}>
			<div
				style={
					{
						// paddingBottom: `${(height / width) * 100}%`,
					}
				}
			>
				<img src={src} alt={alt} />
			</div>
		</div>
	)
}
