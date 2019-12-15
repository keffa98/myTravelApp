import { Component } from '@angular/core';
import {AlertController, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private menuCtrl: MenuController) {
  }

  SwitchOn() {
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action activeras ou désactiveras le statut de' +
        ' préparation de votre prochain voyage !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    alert.present();  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SettingsPage');
  // }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
