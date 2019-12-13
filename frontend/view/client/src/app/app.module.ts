/**
 * Modulos 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { LoginComponent } from './client/login.component';
import { RegistrarComponent } from './client/registrar.component';
/**
 * Rutas
 */
import { APP_ROUTES } from './routes/app.routes';
/**
 * Servicios
 */
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenofoundComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }