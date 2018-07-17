export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveTOInactive(){
        this.activeToInactiveCounter++;
        console.log('Active to inactive ' + this.activeToInactiveCounter);
    }

    incrementInactiveTOActive(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to Inactive ' + this.inactiveToActiveCounter);
    }

}