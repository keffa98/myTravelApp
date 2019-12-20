import {TravelsModel} from '../models/travels.model';
import {Subject} from "rxjs";
import firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

export class TravelsService {


  travels$ = new Subject();
  travelList: TravelsModel[] = [
    {
      name: 'London',
      billets:[''],
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: false,
      startDate: '',
      endDate: ''
    },
    {
      billets:[''],
      name: 'Porto',
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: false,
      startDate: '',
      endDate: ''
    },
    {
      name: 'Barcelone',
      billets: [''],
      hotels: [''],
      activity: [
        'Lorepsum'
      ],
      isDone: true,
      startDate: '',
      endDate: ''
    },
    {
      name: 'Santorini',
      billets: [''],
      hotels: [''],
      activity: [
        'Lorepsum',
      ],
      isDone: true,
      startDate: '',
      endDate: ''
    }
  ];

  emitTravels() {
    this.travels$.next(this.travelList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('travels').set(this.travelList).then(
        (data: DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('travels').once('value').then(
        (data: DataSnapshot) => {
          this.travelList = data.val();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }

}
