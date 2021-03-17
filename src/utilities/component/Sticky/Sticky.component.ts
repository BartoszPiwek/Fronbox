import { Component, IComponentConfig } from "../../abstract/component.abstract";

interface IStickyComponent extends IComponentConfig {
	onChange?: (value: boolean) => void;
}

export class StickyComponent extends Component implements IStickyComponent {
	onChange?: (value: boolean) => void;

	public isActive: boolean = false;

	constructor(config?: IStickyComponent) {
		super(config);
		super.init();
	}

	onInit() {
		const observer = new IntersectionObserver(
			([e]) => {
				const isActive = e.intersectionRatio < 1;

				switch (isActive) {
					case true:
						this.element.classList.add('isSticky');
						break;

					default:
						this.element.classList.remove('isSticky');
						break;
				}

				this.onChange && this.onChange(isActive);
				this.isActive = isActive;
			},
			{ threshold: [1] }
		);

		observer.observe(this.element);
	}
}
