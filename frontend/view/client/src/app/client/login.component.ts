import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Usuario } from "../models/usuario.model";
import { UsuarioService } from '../services/services.index';
import swal from "sweetalert";

declare function init_plugins();
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {

  public _formulario: FormGroup;

  username: string = "";
  recuerdame: boolean = false;


  constructor(public _router: Router, private _serviceUsuario: UsuarioService) {
    this._formulario = new FormGroup({
      username: new FormControl("", Validators.required),
      clave: new FormControl("", Validators.required),
      recuerdame: new FormControl(false)
    });
  }

  ngOnInit() {
    init_plugins();
    this.username = localStorage.getItem("email") || "";

    if (this.username.length > 1) {
      this._formulario.setValue({
        username: this.username,
        clave: "",
        recuerdame: true
      });
    }
  }

  iniciarSesion() {

    if (this._formulario.invalid) {
      swal(`Incorrecto`, `Ingrese sus credenciales`, `info`);
      return;
    }

    if (this._formulario.value.recuerdame) {
      localStorage.setItem("email", this._formulario.value.username);
    } else {
      localStorage.removeItem("email");
    }

    let usuario = new Usuario(this._formulario.value.username, this._formulario.value.clave);

    this._serviceUsuario.login(usuario)
      .subscribe(data => {
        swal(
          `Correcto`,
          `${usuario.username} - Bienvenido al Sistema`,
          `success`
        );
        this._router.navigate(["/dashboard"]);
      })
  }
}