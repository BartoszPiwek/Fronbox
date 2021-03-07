import { Component } from "../../scripts/abstract/component";
import { StickyComponent } from "../Sticky/Sticky.component";

export class HeaderComponent extends Component {
	constructor(config) {
		super(config);
	}

	onInit() {
		new StickyComponent({
			element: this.element,
		})
	}
}
