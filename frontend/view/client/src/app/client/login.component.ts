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

  _formulario: FormGroup;

  public usuario: Usuario

  constructor(public _router: Router) {

    this._formulario = new FormGroup({

      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.email]),
      recuerdame: new FormControl(false)

    });
  }

  ngOnInit() {
    init_plugins();
  }


  iniciarSesion() {
  
    this._router.navigate(["/dashboard"]);
  }
}