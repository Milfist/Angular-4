import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // --> Inyeccion de dependencia AccountService es inyectado por el padre app.component.ts o el module
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>(); ->Vamos a utilizar servicios para la inserción de datos, no eventos

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  } // --> Inyeccion de dependencia

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus-------------->Vamos a utilizar servicios para la inserción de datos, no eventos
    // });
    // const service = new LoggingService();   -->Creación manual del servicio
    // service.logStatusChange(accountStatus); -->Creación manual del servicio
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
