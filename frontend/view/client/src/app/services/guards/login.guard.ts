import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public _router: Router) {

  }

  canActivate(): boolean {
    if (this._usuarioService.isLogeado()) {
      return true;
    } else {
      console.log('Bloqueado por el loginGuard');
      this._router.navigate(['/login']);
      return true;
    }
  }



}
