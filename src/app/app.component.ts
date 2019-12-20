import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from "firebase";

import { HomePage } from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {TravelsPage} from "../pages/travels/travels";
import {TabsPage} from "../pages/tabs/tabs";
import {AuthPage} from "../pages/auth/auth";
//import {TabsPage} from "../pages/tabs/tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 // rootPage:any = TabsPage;
  homePage:any = HomePage;
  tabsPage: any = TabsPage;
  travelsPage: any = TravelsPage;
  settingsPage: any = SettingsPage;
  authPage: any=AuthPage;
  @ViewChild('content') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let firebaseConfig = {
        apiKey: "AIzaSyBLA81LUDDQ3sdDaGgblJPNnfiVGDSphOU",
        authDomain: "mytravelapp-edc78.firebaseapp.com",
        databaseURL: "https://mytravelapp-edc78.firebaseio.com",
        projectId: "mytravelapp-edc78",
        storageBucket: "mytravelapp-edc78.appspot.com",
        messagingSenderId: "327611465027",
        appId: "1:327611465027:web:7af4b11fda0e51f32283f6",
        measurementId: "G-39LF1JNMTP"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        });
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

