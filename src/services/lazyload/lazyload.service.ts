import LazyLoad, { ILazyLoadInstance } from "vanilla-lazyload";

export class LazyloadService {
	private lazyload: ILazyLoadInstance;

	constructor() {
		this.lazyload = new LazyLoad({
			use_native: false,
			elements_selector: '.lazyload',
			unobserve_entered: true,
			class_loaded: 'isLoaded',
			// @ts-ignore Missing type
			class_entered: 'isEntered',
		});
	}

	public update() {
		this.lazyload.update();
	}
}
