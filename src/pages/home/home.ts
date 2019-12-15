import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {TravelsPage} from "../travels/travels";
import {SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController){}

  travelsPage = TravelsPage;
  settingsPage = SettingsPage;
  onGoToTravels() {
    this.navCtrl.push(TravelsPage);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
