import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TravelsPage} from "../travels/travels";
import {SettingsPage} from "../settings/settings";
import {HomePage} from "../home/home";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  travelsPage = TravelsPage;
  settingsPage = SettingsPage;
  homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
