import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert'

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  public _formulario: FormGroup;

  public usuario: Usuario = new Usuario(null, null);

  constructor(public _router: Router) {

    this._formulario = new FormGroup({

      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recuerdame: new FormControl(false)

    });

    console.log(this._formulario);
  }

  ngOnInit() {
    init_plugins();
  }


  iniciarSesion() {

    if (this._formulario.invalid) {
      console.log(this._formulario.invalid, ' invalid');
      console.log(this._formulario.valid, ' valid');
      swal(`Incorrecto`, `Ingrese datos correctos`, `info`);
      return;
    }

    this.usuario.username = this._formulario.value.username;
    this.usuario.password = this._formulario.value.password;

    console.log(this.usuario)

    console.log(this._formulario.invalid, ' invalid');
    console.log(this._formulario.valid, ' valid');
    console.log(this._formulario.value);



    if (this.usuario.username === "bacsystem" && this.usuario.password === "123") {
      swal(`Correcto`, `${this.usuario.username} - Bienvenido al Sistema`, `success`);
      this._router.navigate(["/dashboard"]);
    } else {
      swal(`Incorrecto`, `Credenciales Incorrectas`, `error`);
    }

  }
}