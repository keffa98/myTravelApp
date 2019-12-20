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
import {DatePicker} from "@ionic-native/date-picker";
import {AuthService} from "../services/auth.service";
import {AuthPage} from "../pages/auth/auth";
import {TravelPicturePage} from "../pages/travel-picture/travel-picture";
import {SingleTravelPicturePage} from "../pages/single-travel-picture/single-travel-picture";
import {NewTravelPicturePage} from "../pages/new-travel-picture/new-travel-picture";
import {CoordinatesPage} from "../pages/coordinates/coordinates";
import {TravelsPictureService} from "../services/travels-picture.service";
import {AgmCoreModule} from "@agm/core";
import {GeolocationOriginal} from "@ionic-native/geolocation";
import {Geolocation} from "@ionic-native/geolocation/ngx";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TravelsPage,
    SingleTravelPage,
    TabsPage,
    SettingsPage,
    AuthPage,
    TravelPicturePage,
    SingleTravelPicturePage,
    NewTravelPicturePage,
    CoordinatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCp0QixoT0pOa0UdunhGXK3nERADasFd64'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TravelsPage,
    SingleTravelPage,
    TabsPage,
    SettingsPage,
    AuthPage,
    TravelPicturePage,
    SingleTravelPicturePage,
    NewTravelPicturePage,
    CoordinatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TravelsService,
    DatePicker,
    AuthService,
    TravelsPictureService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
