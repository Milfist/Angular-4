import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evens = [];
  odds = [];

  onStart(data: {num: number}) {
    console.log(data.num);
    if (data.num % 2 === 0) {
      this.evens.push({num: data.num});
    } else {
      this.odds.push({num: data.num});
    }
  }
}
