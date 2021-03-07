import { BurgerComponent } from './../components/Burger/Burger.component';
import { getElement } from './tools/DOM';
import 'regenerator-runtime/runtime'

import { BrowserService } from './services/browserService';

export const browser = new BrowserService();

window.addEventListener('load', () => {
	const burger = getElement('.burger');
	new BurgerComponent({ element: burger });
}, { once: true });

window.onload = () => {
	/* Inform stylesheet to remove style fallback for JavaScript elements */
	document.documentElement.classList.remove("isLoading");
}
