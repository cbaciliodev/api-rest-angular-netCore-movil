import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario.model';
import { environment as env } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import swal from "sweetalert";
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;

  constructor(public _httpClient: HttpClient, private _router: Router) {

    this.cargarStorage();
  }

  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    this._router.navigate(['/login'])
  }


  login(usuario: Usuario) {

    let url = env.nodejs.concat(`usuario`);
    //let url = env.visualStudio.concat(`usuario/login`);

    return this._httpClient.post(url, usuario)
      .pipe(map((data: any) => {
        this.guardarLocalStorage(usuario);
        return true;
      }))
      .pipe(catchError(e => {
        swal(`Incorrecto`, `${e.error.message}`, `error`);
        return throwError(e);
      }));
  }

  guardarLocalStorage(usuario: Usuario) {
    usuario.clave = ":=)"
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
  }

  cargarStorage() {

    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
    }
  }

  isLogeado() {
    return (this.usuario != null) ? true : false;
  }
}
