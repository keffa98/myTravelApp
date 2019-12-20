import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TravelsService} from "../../../services/travels.service";
import {TravelsModel} from "../../../models/travels.model";
import {FormBuilder, NgForm} from "@angular/forms";
import {DatePicker} from "@ionic-native/date-picker";

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
              public travelsService: TravelsService,
              public datePicker: DatePicker,
              private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>console.log('Got date :' , date),
      err => console.log('Error  occurred while getting date:' , err)
    );
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

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteDate() {
    this.travel.startDate = '';
    this.travel.endDate = '';
    this.dismissModal();
  }
}
