import { IComponentConfig } from '../../scripts/abstract/component';
import { Component } from "../../scripts/abstract/component";

export interface BurgerElement {
	Burger: BurgerComponent
}

export interface IBurger extends IComponentConfig {
	onClick?: (value: boolean) => void;
}

export class BurgerComponent extends Component<IBurger, null> implements IBurger {
	public onClick: (value: boolean) => void;

	private _isActive: boolean = false;

	public get isActive(): boolean {
		return this._isActive;
	}

	public set isActive(value: boolean) {
		switch (value) {
			case true:
				this.element.classList.add('isActive');
				break;

			default:
				this.element.classList.remove('isActive');
				break;
		}

		this._isActive = value;
	}

	constructor(config?: IBurger) {
		super(config);
	}

	onInit() {
		this.addEventListener(this.element, 'click', () => {
			this.isActive = !this.isActive;

			this.onClick && this.onClick(this.isActive);
		});
	}
}
