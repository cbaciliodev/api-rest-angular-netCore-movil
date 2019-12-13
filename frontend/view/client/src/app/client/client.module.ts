import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegistrarComponent } from './registrar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    //LoginComponent,
    //RegistrarComponent
  ]
})
export class ClientModule { }
