import { Component, OnInit } from '@angular/core';
import { CountService } from './count.service';
@Component({
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items:any;
  count: number = 1;
  index:number = -1;

  constructor(
    private countService: CountService,
  ) {}

  ngOnInit() {
    this.count = this.countService.getCount();
    this.index = -1;
    this.items = new Array(this.count).fill(0).map((x, i) => (i + 1));
  }

  setIndex(index:number) {
    this.index = index;
  }

}
