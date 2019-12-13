/**
 * Modulos 
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { ClientModule } from './client/client.module';
/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

/**
 * Rutas
 */
import { APP_ROUTES } from './routes/app.routes';
/**
 * Servicios
 */
import { ServiceModule } from './services/service.module';
import { LoginComponent } from './client/login.component';
import { RegistrarComponent } from './client/registrar.component';
import { FormsModule } from '@angular/forms';

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
    //ClientModule,
    FormsModule,
    APP_ROUTES,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }