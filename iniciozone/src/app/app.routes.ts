import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter/counter-pages.component';
import { CarComponent } from './pages/car/car.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPagesComponent
    },
    {
        path: 'car',
        component: CarComponent
    }
];
