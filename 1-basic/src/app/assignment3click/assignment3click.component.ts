import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3click',
  templateUrl: './assignment3click.component.html',
  // styleUrls: ['./assignment3click.component.css']
  styles: [`
    .activate {
        color: white;
    }
  `]
})
export class Assignment3clickComponent implements OnInit {

  clicks = 0;

  constructor() {
    this.clicks += 1;
   }

  ngOnInit() {
  }

  getColor() {
    return this.clicks > 4 ? 'blue' : 'white';
  }
}
