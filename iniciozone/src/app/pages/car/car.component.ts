import { Component, signal} from '@angular/core';

@Component({
  templateUrl: './car.component.html',  
})

//Dentro del componente CarComponent, crea tres señales con valores iniciales:
// brand => string = 'Renault'
// year => number = 2020
// student => string = aqui nombre del estudiante en minuscula
//Implementar el método changeCar
// Implementar el método resetForm
// Establece los valores a:
// brand = 'Renault'
// year = 2020
// Implementar el método changeYear
// Asigna este método al evento click del botón respectivo. Debe cambiar el año a 2025.

export class CarComponent {
    brand = 'Renault';
    year = 2020;
    student = 'Diego Chavez';
    carSignal = signal(0)

    getCarDescription() {
    return `${this.brand} - ${this.carSignal()}`;
    }

    changeCar(): void {
        this.brand = "kia";
        this.year = 2021;
    }

    resetForm(): void {
        this.brand = 'Renault';
        this.year = 2020;
    }

    changeYear(): void {
        this.year = 2025;
        //this.carSignal.set(2025);
        //this.carSignal.update((currentValue) => 2025);
        //let prueba = this.carSignal();
    }

}