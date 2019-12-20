import {Component, OnInit} from '@angular/core';
import {
  LoadingController,
  Modal,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoordinatesPage} from "../coordinates/coordinates";
import {Geolocation} from "@ionic-native/geolocation/ngx";


@Component({
  selector: 'page-new-travel-picture',
  templateUrl: 'new-travel-picture.html',
})
export class NewTravelPicturePage implements OnInit{

  travelPictureForm: FormGroup;
  imageUrl: string;
  latitude: number;
  longitude: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formbuilder: FormBuilder,
              private modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private geolocation: Geolocation,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {}

   ngOnInit() {
    this.initForm();
   }

   initForm() {
    this.travelPictureForm = this.formbuilder.group({
        name: ['',Validators.required],
        date: [new Date().toISOString(), Validators.required],
        description: ['',Validators.required],
      });
   }

   onOpenPositionModal() {
     let modal: Modal;
     if (this.latitude) {
       modal = this.modalCtrl.create(
         CoordinatesPage,
         {latitude: this.latitude, longitude: this.longitude}
       );
     } else {
       modal = this.modalCtrl.create(
         CoordinatesPage
       );
     }    modal.present();
     modal.onDidDismiss(
       (data) => {
         if (data) {
           this.latitude = data.latitude;
           this.longitude = data.longitude;
         }
       }
     );
   }
  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
