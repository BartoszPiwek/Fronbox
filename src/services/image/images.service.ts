import { getElements } from '../../scripts/tools/DOM';
import LazyLoad from "lazyload";

export class ImagesService {
	constructor() {
		this.bindImages();
	}

	bindImages(element: HTMLElement = null) {
		const elements = getElements('[data-src]:not([src])', element);

		if (!elements.length) {
			return
		}

		new LazyLoad(elements);
	}
}
