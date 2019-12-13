import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/services.index';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styles: []
})
export class RightSidebarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService) { }

  ngOnInit() {
  }

  cambiarColor(color: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicartema(color);

  }

  aplicarCheck(check: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    check.classList.add('working');
  }

  colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {

      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
