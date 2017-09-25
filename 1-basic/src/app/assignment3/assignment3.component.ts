import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  // styleUrls: ['./assignment3.component.css']
  styles: [`
    .activate {
        color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {

  display = false;
  numberClicks = 0;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onClickDetails() {
    this.numberClicks += 1;
    this.clicks.push('Click ' + this.numberClicks);
    if (this.display === true) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}
