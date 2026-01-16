import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from '@/pages/auth/login';
import { Signup } from '@/pages/signup/signup';


export const appRoutes: Routes = [
    {path: '',component: Login},
    { path: 'landing', component: Landing },
    {path:'signUp', component: Signup},
    {path: 'homePage',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'homeClient', loadChildren: () => import('./app/pages/homeClient/homeClient.routes') }
    ]},
    
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
