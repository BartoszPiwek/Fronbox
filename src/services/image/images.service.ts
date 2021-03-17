import LazyLoad, { ILazyLoadInstance } from "vanilla-lazyload";

export class ImagesService {
	private lazyload: ILazyLoadInstance;

	constructor() {
		this.lazyload = new LazyLoad({
			use_native: false,
			unobserve_entered: true,
			// @ts-ignore Missing type
			class_entered: 'isEntered',
			class_loaded: 'isLoaded',
		});
	}

	public update() {
		this.lazyload.update();
	}
}
