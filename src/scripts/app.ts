import { BurgerComponent } from './../components/Burger/Burger.component';
import { getElement } from './tools/DOM';
import 'regenerator-runtime/runtime'
import { BrowserService } from './services/browser/browser.service';

export const browserService = new BrowserService();

window.addEventListener('load', () => {
	const burger = getElement('.burger');
	new BurgerComponent({ element: burger, onClick: (value) => {
		console.log(`burger ${value}`);
		
	} });

	import('./foo').then(module => module.default())
}, { once: true });

window.onload = () => {
	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
}
