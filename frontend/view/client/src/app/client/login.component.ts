import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert'

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {


  iniciarSesion(f: NgForm) {

    console.log(f.value)
    console.log(f.valid)
  }

  recuerdame: boolean = false;
  public usuario: Usuario
  constructor(public _router: Router) {



  }

  ngOnInit() {
    init_plugins();
  }


}