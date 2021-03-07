import { getElements } from "../tools/DOM";

export const detectStickyInit = () => {
	const elements = getElements('[data-sticky]');

	if (!elements.length) {
		return;
	}

	const observer = new IntersectionObserver(
		([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
		{ threshold: [1] }
	);

	elements.forEach(element => {
		observer.observe(element);
	});
}
