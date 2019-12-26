import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
/**
 * Servicios
 */
import {
  SidebarService, SettingsService, SharedService,UsuarioService,LoginGuard
} from './services.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService, SettingsService, SharedService,UsuarioService,LoginGuard
  ]
})
export class ServiceModule { }
