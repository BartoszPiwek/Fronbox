import { BrowserService } from '../services/browser/browser.service';
import { LazyloadService } from '../services/lazyload/lazyload.service';
import { BurgerComponent } from '../utilities/component/Burger/Burger.component';

export const browserService = new BrowserService();
export const lazyloadService = new LazyloadService();

window.addEventListener('load', () => {}, { once: true });

window.onload = () => {
	new BurgerComponent({
		element: document.getElementById('burger'),
	});

	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove('isLoading');
};
