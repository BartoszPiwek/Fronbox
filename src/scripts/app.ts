import { ImagesService } from './../services/image/images.service';
import { BurgerComponent } from './../components/Burger/Burger.component';
import { getElement } from './tools/DOM';
import 'regenerator-runtime/runtime'
import { BrowserService } from './services/browser/browser.service';
import { HeaderComponent } from '../components/Header/Header.component';

export const browserService = new BrowserService();
export const imagesService = new ImagesService();

window.addEventListener('load', () => {
	const burger = getElement('.burger');
	new BurgerComponent({
		element: burger, onClick: (value) => {
			console.log(`burger ${value}`);
		}
	});

	const headerEl = getElement('.header');
	new HeaderComponent({ element: headerEl })
}, { once: true });

window.onload = () => {
	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
}
