import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./starwars/pages/dashboard-page/dashboard-page'),
        children: [
            {
                path: 'people',
                loadComponent: () => import('./starwars/pages/people-page/people-page')
            },
            {
                path: 'movies',
                loadComponent: () => import('./starwars/pages/movies-page/movies-page')
            },
            {
                path: 'planets',
                loadComponent: () => import('./starwars/pages/planets-page/planets-page')
            },
            {
                path: '**',
                redirectTo: 'people'
            },
        ]
    }, 
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
