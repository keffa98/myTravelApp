import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TravelsService} from "../../../services/travels.service";
import {TravelsModel} from "../../../models/travels.model";

/**
 * Generated class for the SingleTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-travel',
  templateUrl: 'single-travel.html',
})
export class SingleTravelPage implements OnInit{

  index: number;
  travel: TravelsModel;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public travelsService: TravelsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.travel = this.travelsService.travelList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleTravel() {
    this.travel.isDone = !this.travel.isDone;
    console.log(this.travel.isDone);
  }
}
