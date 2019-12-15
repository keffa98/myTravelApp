import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TravelsPage} from "../pages/travels/travels";
import {SingleTravelPage} from "../pages/travels/single-travel/single-travel";
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {TravelsService} from "../services/travels.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TravelsPage,
    SingleTravelPage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TravelsPage,
    SingleTravelPage,
    TabsPage,
    SettingsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    TravelsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
