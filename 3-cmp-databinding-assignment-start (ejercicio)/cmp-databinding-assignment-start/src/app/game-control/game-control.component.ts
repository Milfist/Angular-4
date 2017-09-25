import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<{num: number}>();

  num = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.num += 1;
      this.startGame.emit({
        num: this.num
      });   
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
