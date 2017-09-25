export class CounterService {
    
    countActiveActions = 0;
    countInactiveActions = 0;

    updateActiveActions() {
        this.countActiveActions += 1;
        console.log('Active actions: ' + this.countActiveActions);
    }

    updateInactiveActions() {
        this.countInactiveActions += 1;
        console.log('Inactive actions: ' + this.countInactiveActions);    
    }
}