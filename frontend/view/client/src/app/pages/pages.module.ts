/**
 * Modulos
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesModule } from '../shared/shares.module';
/**
 * Paginas - Componentes 
*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
/**
 * Rutas
 */
import { PAGES_ROUTES } from './routes/pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharesModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
  ]
})
export class PagesModule { }
