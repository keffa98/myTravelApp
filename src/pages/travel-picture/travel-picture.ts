import {Component, OnDestroy, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TravelsPictureModels} from "../../models/travels-picture.models";
import {Subscription} from "rxjs";
import {TravelsPictureService} from "../../services/travels-picture.service";
import {NewTravelPicturePage} from "../new-travel-picture/new-travel-picture";


@Component({
  selector: 'page-travel-picture',
  templateUrl: 'travel-picture.html',
})
export class TravelPicturePage implements OnInit, OnDestroy{
  travelPictureList: TravelsPictureModels[];
  travelPictureListSubscription: Subscription;
  newTravelPicture: NewTravelPicturePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private travelPictureService: TravelsPictureService) {}
   ngOnInit() {
    this.travelPictureListSubscription = this.travelPictureService.travelPictureList$.subscribe(
      (travelPictures: TravelsPictureModels[]) => {
        this.travelPictureList = travelPictures;
      }
    );
    this.travelPictureService.emitList();
   }

   ngOnDestroy() {
    this.travelPictureListSubscription.unsubscribe();
   }

   addTravelPicture() {
    this.navCtrl.push(NewTravelPicturePage);
    console.log('am in');
   }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TravelPicturePage');
  // }

}
