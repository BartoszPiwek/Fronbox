import { ImagesService } from './../services/image/images.service';
import { BrowserService } from '../services/browser/browser.service';

export const browserService = new BrowserService();
export const imagesService = new ImagesService();

window.addEventListener('load', () => {
}, { once: true });

window.onload = () => {
	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
}
