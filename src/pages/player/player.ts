import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  nom: string;
  ville : string;
  age : number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.nom = navParams.get('nom');
    this.ville = navParams.get('ville');
    this.age = navParams.get('age');

    //console.log(this.nom + this.ville + this.age);
  }

}
