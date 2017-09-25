import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',     // forma 1 -->Recomendada!
  // selector: '[app-servers]',   forma 2
  // selector: '.app-servers',    forma 3
  // templateUrl: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event); Nos muestra la información del evento en consola
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickAddUser() {
    this.userName = '';
  }
}
