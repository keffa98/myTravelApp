import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {TravelsPage} from "../pages/travels/travels";
import {TabsPage} from "../pages/tabs/tabs";
//import {TabsPage} from "../pages/tabs/tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 // rootPage:any = TabsPage;
  // rootPage:any = HomePage;
  tabsPage: any = TabsPage;
  travelsPage: any = TravelsPage;
  settingsPage: any = SettingsPage;
  @ViewChild('content') content: NavController;


  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

