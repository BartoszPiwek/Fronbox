export abstract class Component {
	private scrollEvent: EventListenerOrEventListenerObject;
	private resizeEvent: EventListenerOrEventListenerObject;

	constructor(params?: any) {
		/* Run function after initialization */
		if (this.afterInit) {
			this.afterInit();
		}

		if (params) {
			Object.assign(this, params);
		}

		/* Run function on resize */
		if (this.onResize) {
			window.addEventListener("resize", this.resizeEvent = () => {
				this.onResize();
			},
				false
			);
		}

		/* Run function on scroll */
		if (this.onScroll) {
			window.addEventListener("scroll", this.scrollEvent = () => {
				this.onScroll();
			});
		}

		if (this.onInit) {
			this.onInit();
		}
	}

	/** Destroy component */
	public destroy() {
		if (this.onDestroy) {
			if (this.scrollEvent) {
				window.addEventListener("scroll", this.scrollEvent);
			}

			if (this.resizeEvent) {
				window.addEventListener("scroll", this.resizeEvent);
			}

			this.onDestroy();
		}
	}

	protected afterInit?(): void;
	protected onInit?(): void;
	protected onDestroy?(): void;

	protected onScroll?(): void;
	protected onResize?(): void;
}
