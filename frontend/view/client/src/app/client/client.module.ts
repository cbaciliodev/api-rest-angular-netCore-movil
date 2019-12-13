import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegistrarComponent } from './registrar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule
    ],
  exports: [
    //LoginComponent,
    //RegistrarComponent
  ]
})
export class ClientModule { }
