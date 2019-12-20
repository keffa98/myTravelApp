import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation/ngx";



@Component({
  selector: 'page-coordinates',
  templateUrl: 'coordinates.html',
})
export class CoordinatesPage implements OnInit{
  latitude: number;
  longitude: number;
  marker: {
    latitude: number,
    longitude: number,
    draggable: true
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private geolocation: Geolocation,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {}


  ngOnInit() {
    let receivedLatitude = this.navParams.get('latitude');
    let receivedLongitude = this.navParams.get('longitude');
    if (receivedLatitude) {
      this.latitude = receivedLatitude;
      this.longitude = receivedLongitude;
      this.marker = {
        latitude: receivedLatitude,
        longitude: receivedLongitude,
        draggable: true
      }
    } else {
      this.latitude = 57.28;
      this.longitude = -2.58;
    }
  }

  onMapClicked($event) {
    this.marker = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      draggable: true
    };
  }

  onLocateUser() {
    let loader = this.loadingCtrl.create({content: 'Locating you'});
    loader.present();
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        loader.dismiss();
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.marker = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          draggable: true
        }
      }).catch(
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    )
  }
  onSave() {
    this.viewCtrl.dismiss({
      latitude: this.marker.latitude,
      longitude: this.marker.longitude
    });
  }


  onCancel() {
    this.viewCtrl.dismiss();
  }

}
