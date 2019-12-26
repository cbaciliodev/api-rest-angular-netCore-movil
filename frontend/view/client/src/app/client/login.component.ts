import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  NgForm,
  FormGroup,
  FormControl,
  FormControlName,
  Validators
} from "@angular/forms";
import { Usuario } from "../models/usuario.model";
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

  public usuario: Usuario = new Usuario(null, null);

  constructor(public _router: Router) {
    this._formulario = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      recuerdame: new FormControl(false)
    });
  }

  ngOnInit() {
    init_plugins();

    this.username = localStorage.getItem("email") || "";

    if (this.username.length > 1) {
      this._formulario.setValue({
        username: this.username,
        password: "",
        recuerdame: true
      });
    }
  }

  estaLogueado(){
    
  }

  iniciarSesion() {
    if (this._formulario.invalid) {
      swal(`Incorrecto`, `Ingrese datos correctos`, `info`);
      return;
    }

    this.usuario.username = this._formulario.value.username;
    this.usuario.password = this._formulario.value.password;

    if (this.usuario.username === "bacsystem@gmail.com" &&
      this.usuario.password === "123") {
      swal(
        `Correcto`,
        `${this.usuario.username} - Bienvenido al Sistema`,
        `success`
      );

      if (this._formulario.value.recuerdame) {
        localStorage.setItem("email", this._formulario.value.username);
      } else {
        localStorage.removeItem("email");
      }

      const usuarioSesion = {
        username: this.usuario.username
      };

      localStorage.setItem("username", JSON.stringify(usuarioSesion));
      this._router.navigate(["/dashboard"]);
    } else {
      swal(`Incorrecto`, `Credenciales Incorrectas`, `error`);
    }
  }
}
