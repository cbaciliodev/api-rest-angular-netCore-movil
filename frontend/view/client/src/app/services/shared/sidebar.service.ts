import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal', icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Inicio', url: '/dashboard'
        },
        {
          titulo: 'Producto', url: '/perfil',
        }
      ]
    }
  ];

  constructor() { }




}
