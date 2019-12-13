/**
 * Modulos
 */
import { Routes, RouterModule } from "@angular/router";
/**
 * Componentes
 */
import { PagesComponent } from '../pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const pages_routes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
]

export const PAGES_ROUTES = RouterModule.forChild(pages_routes);