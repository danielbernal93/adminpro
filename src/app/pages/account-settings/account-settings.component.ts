import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const SELECTORES: any = document.getElementsByClassName('selector');
    for (const ref of SELECTORES) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  colocarCheck() {
    const SELECTORES: any = document.getElementsByClassName('selector');
    const TEMA = this._ajustes.ajustes.tema;
    for (const ref of SELECTORES) {
      if (ref.getAttribute('data-theme') === TEMA) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
