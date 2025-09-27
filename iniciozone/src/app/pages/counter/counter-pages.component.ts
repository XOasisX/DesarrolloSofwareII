import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

//crear dos botones adicionales uno de resta y otro de reseteo que no sea dentro del template 
//se debe usar templateUrl, debe ser un archivo html externo
//el boton de reseteo debe poner el contador a 
//10 y el de resta debe restar 1 al contador

//Decorador de componente
// @Component({
//     template:`
//     <h1>Componente - contador</h1>
//     <h2>Valor: {{counter}}</h2>
//     <button (click)="add(1)">Aumentar 1</button>
//     <button (click)="counter=0">Resetear</button>
//     <button (click)="add(-1)">Restar 1</button>`
// })

@Component({
    templateUrl: './counter-pages.component.html',  
    styleUrls: ['./counter-pages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class CounterPagesComponent {
    counter: number = 0;
    counterSignal = signal(0)

    constructor() {
        setInterval((): void =>{
            this.counter +=1;
            //this.counterSignal.update((currentValue) => currentValue + 1);
            console.log("Se ha actualizado el contador");
        }, 1000);
    }

    add(value: number): void {
        this.counter += value; 
        this.counterSignal.update((currentValue) => currentValue + value);
    }

    subtract(value: number): void {
        this.counter -= value; 
        this.counterSignal.update((currentValue) => currentValue - value);
    }   

    reset(): void { 
        this.counter = 0;
        this.counterSignal.set(0);
    }
}






