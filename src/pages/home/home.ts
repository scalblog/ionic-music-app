import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PlayerPage } from '../player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nom: string;
  ville : string;
  age : number;

  constructor(public navCtrl: NavController) {

  }

  private openPresentation() {
    this.navCtrl.push(PlayerPage, {
      nom: this.nom, 
      ville: this.ville,
      age: this.age
      }
    );
  }
}
