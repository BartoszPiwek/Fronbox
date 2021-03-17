import { Component } from "../../utilities/abstract/component.abstract";
import { StickyComponent } from "../../utilities/component/Sticky/Sticky.component";

export class HeaderComponent extends Component {
	constructor(config) {
		super(config);
		super.init();
	}

	onInit() {
		new StickyComponent({
			element: this.element,
		})
	}
}
