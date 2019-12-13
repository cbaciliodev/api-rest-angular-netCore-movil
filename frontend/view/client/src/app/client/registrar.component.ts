import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: []
})
export class RegistrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
