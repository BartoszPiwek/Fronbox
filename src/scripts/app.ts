import { BrowserService } from '../services/browser/browser.service';
import { LazyloadService } from '../services/lazyload/lazyload.service';

export const browserService = new BrowserService();
export const lazyloadService = new LazyloadService();

window.addEventListener('load', () => {
}, { once: true });

window.onload = () => {
	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
}
