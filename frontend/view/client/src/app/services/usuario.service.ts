import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  user: Usuario = new Usuario('dabacilio88@gmail.com', '123');

  constructor(public _httpClient: HttpClient) {

  }

  login(usuario: Usuario, recodar: boolean = false) {

    usuario = this.user;

    return usuario;

  }

}
