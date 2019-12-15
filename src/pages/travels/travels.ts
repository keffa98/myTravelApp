import {Component} from '@angular/core';
import {MenuController, ModalController, NavController} from "ionic-angular";
import {SingleTravelPage} from "./single-travel/single-travel";
import {TravelsModel} from "../../models/travels.model";
import {TravelsService} from "../../services/travels.service";

@Component({
  selector: 'page-travels',
  templateUrl: 'travels.html'
})
export class TravelsPage{

  travel: TravelsModel[];

  constructor(private nav: NavController,
              private modalCtrl: ModalController,
              private travelService: TravelsService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.travel = this.travelService.travelList.slice();
  }
 onLoadTravel(index : number) {
    //this.nav.push(SingleTravelPage, {travel: travel});
    let modal = this.modalCtrl.create(SingleTravelPage, {index: index});
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }


}
