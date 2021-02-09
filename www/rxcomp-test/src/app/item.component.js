
import { Component, getContext } from 'rxcomp';

export class ItemComponent extends Component {
	onInit() {
		const { node } = getContext(this);
		node.innerText = this.item;
	}
}

ItemComponent.meta = {
	selector: '[item]',
	inputs: ['item'],
};
