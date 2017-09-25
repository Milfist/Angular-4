import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]  --> Si quitamos la inyección del componente padre, podemos ponerla en el module
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor (private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
