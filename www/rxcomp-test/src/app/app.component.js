import { Component } from '../../../../../rxcomp';
import { getCount } from '../count';

export class AppComponent extends Component {
  onInit() {
    this.count = getCount();
    this.index = -1;
    this.items = new Array(this.count).fill(0).map((x, i) => i + 1);
  }
  setIndex(index) {
    this.index = index;
    this.pushChanges();
  }
}

AppComponent.meta = {
  selector: '[app-component]'
};
