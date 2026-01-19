import { FormLayoutDemo } from '../uikit/formlayoutdemo';
import { Routes } from '@angular/router';
import { RendezVousComponent } from '../uikit/RendezVousComponent';
export default[
    //{ path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    { path: 'rdvClient', data: { breadcrumb: 'Rendez-vous client' }, component: RendezVousComponent },
    
] as Routes;