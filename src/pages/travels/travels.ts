import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingController, MenuController, ModalController, NavController, ToastController} from "ionic-angular";
import {SingleTravelPage} from "./single-travel/single-travel";
import {TravelsModel} from "../../models/travels.model";
import {TravelsService} from "../../services/travels.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'page-travels',
  templateUrl: 'travels.html'
})
export class TravelsPage implements OnInit,OnDestroy{

  travel: TravelsModel[];
  travelSubscription: Subscription;

  constructor(private nav: NavController,
              private modalCtrl: ModalController,
              private travelService: TravelsService,
              private menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.travelSubscription = this.travelService.travels$.subscribe (
      (travels: TravelsModel[]) => {
        this.travel = this.travelService.travelList.slice();
      }
    );
    this.travelService.emitTravels();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

  onLoadTravel(index : number) {
    //this.nav.push(SingleTravelPage, {travel: travel});
    let modal = this.modalCtrl.create(SingleTravelPage, {index: index});
    modal.present();
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours...'
    });
    loader.present();
    this.travelService.saveData().then(
      ()=> {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours...'
    });
    loader.present();
    this.travelService.retrieveData().then(
      ()=> {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  ngOnDestroy() {

    this.travelSubscription.unsubscribe();
  }
}
