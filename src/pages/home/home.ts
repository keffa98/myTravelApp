import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {TravelsPage} from "../travels/travels";
import {SettingsPage} from "../settings/settings";
import {TravelPicturePage} from "../travel-picture/travel-picture";
import {CoordinatesPage} from "../coordinates/coordinates";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController){}

  travelsPage = TravelsPage;
  settingsPage = SettingsPage;
  travelPicturePage = TravelPicturePage;
  coordinatePage = CoordinatesPage;
  onGoToTravels() {
    this.navCtrl.push(TravelsPage);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
