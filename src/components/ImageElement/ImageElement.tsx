import React from 'react'
import cn from 'classnames'

export interface IImageElement {
	src: string
	alt: string
	width: number;
	height: number

	isLazyload?: boolean
	isBackground?: boolean
	hasRetina?: boolean
}

export class ImageElement extends React.Component<IImageElement> {
	public src: string
	alt: string
	width: number;
	height: number;
	image: string;

	constructor(props: IImageElement) {
		super(props);
	}

	async componentDidMount() {
		this.image = await import(`@images/${this.src}?format=webp&width=${this.width}&height=${this.height}`);
	}

	render() {
		return (
			<div className={cn('image')}>
	 			<div style={{paddingBottom: `${(this.height / this.width) * 100}%`}}>
	 				<img src={this.image} alt={this.alt} />
	 			</div>
	 		</div>
		)
	}
}
