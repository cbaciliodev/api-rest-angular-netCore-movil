import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../client/login.component';
import { PagenofoundComponent } from '../pagenofound/pagenofound.component';
import { RegistrarComponent } from '../client/registrar.component';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrarComponent },
    { path: '**', component: PagenofoundComponent }, //page no found - 400
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });