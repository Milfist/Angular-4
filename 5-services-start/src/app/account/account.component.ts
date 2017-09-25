import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
//  import { LoggingService } from '../logging.service'; providers: [LoggingService] // --> Inyeccion de dependencia AccountService es inyectado por el padre app.component.ts
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>(); -->Vamos a utilizar la inyeccion de dep en vez de eventos

  constructor(private loggingService: LoggingService, 
              private accountService: AccountService) {} // --> Inyeccion de dependencia
    
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status}); -->Vamos a utilizar la inyeccion de dep en vez de eventos
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
